/** @format */

import React from 'react'
import useModal from '../../hooks/useModal'
import ConnectModal from './ConnectModal'
import AccountModal from './AccountModal'
import TestModal from '../TestModal'
import {Login} from './types'

interface ReturnType {
  onPresentConnectModal: () => void
  onPresentAccountModal: () => void
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />)
  // const [onPresentConnectModal] = useModal(<TestModal />)
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ''} logout={logout} />)
  return {onPresentConnectModal, onPresentAccountModal}
}

export default useWalletModal
