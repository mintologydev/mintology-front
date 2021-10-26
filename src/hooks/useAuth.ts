/** @format */

import {useCallback} from 'react'
import {useWeb3React, UnsupportedChainIdError} from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import {connectorLocalStorageKey, ConnectorNames} from 'components/WalletModal'
// import useToast from 'hooks/useToast'
import notification from '../utils/notification'
import {connectorsByName} from 'connectors'
import {setupNetwork} from 'utils/wallet'

const useAuth = () => {
  const {activate, deactivate, chainId} = useWeb3React()
  // const { toastError } = useToast()
  const login = useCallback(
    (connectorID: ConnectorNames) => {
      window.localStorage.setItem('currentPlatform', connectorID)
      console.log('connectorID####', connectorID)
      const connector = connectorsByName[connectorID]
      console.log('connectorconnectorconnector####', connector)
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            console.log('没进来么')
            const hasSetup = await setupNetwork()
            console.log('hasSetup####', hasSetup)
            if (hasSetup) {
              activate(connector)
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            if (error instanceof NoEthereumProviderError) {
              notification({
                type: 'error',
                message: 'Provider Error',
                description: 'No provider was found',
              })
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector
                walletConnector.walletConnectProvider = null
              }
              notification({
                type: 'error',
                message: 'Authorization Error',
                description: 'Please authorize to access your account',
              })
            } else {
              notification({
                type: 'error',
                message: error.name,
                description: error.message,
              })
            }
          }
        })
      } else {
        notification({
          type: 'error',
          message: 'Unable to find connector',
          description: 'The connector config is wrong',
        })
      }
    },
    [activate, notification],
  )

  const logout = useCallback(() => {
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
  }, [deactivate])

  return {login, logout}
}

export default useAuth
