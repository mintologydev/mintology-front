/** @format */

import {Config, ConnectorNames} from './types'
import WalletConnectIcon from 'img/WalletConnect@2x.png'
import MetamaskIcon from 'img/metamask@2x.png'

const connectors: Config[] = [
  {
    title: 'Metamask',
    connectorId: ConnectorNames.Injected,
    icon: MetamaskIcon,
  },
  {
    title: 'WalletConnect',
    connectorId: ConnectorNames.WalletConnect,
    icon: WalletConnectIcon,
  },
]

export default connectors
export const connectorLocalStorageKey = 'connectorId'
