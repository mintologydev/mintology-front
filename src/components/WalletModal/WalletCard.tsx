/** @format */

import React from 'react'
import {Button, Typography} from 'antd'
import {connectorLocalStorageKey} from './config'
import {Login, Config} from './types'
import 'style/wallet.less'

const {Text} = Typography

interface Props {
  walletConfig: Config
  login: Login
  onDismiss: () => void
  mb: string
}

const WalletCard: React.FC<Props> = ({login, walletConfig, onDismiss}) => {
  const {title} = walletConfig
  return (
    <div
      className="wallet-item"
      onClick={() => {
        login(walletConfig.connectorId)
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId)
        onDismiss()
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}>
      <Text style={{color: '#000'}}>{title}</Text>
    </div>
  )
}

export default WalletCard
