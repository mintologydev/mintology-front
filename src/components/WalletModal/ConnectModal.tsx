/** @format */

import React from 'react'
import {Modal, Button} from 'antd'
import WalletCard from './WalletCard'
import config from './config'
import {Login} from './types'
import 'style/wallet.less'

const defaultOnDismiss = () => null

type ConnectModalProps = {
  login: Login
  onDismiss?: () => void
}

const ConnectModal = ({login, onDismiss = defaultOnDismiss}: ConnectModalProps) => {
  console.log('没进来么####')
  return (
    <Modal
      title="Connect to a wallet"
      visible={true}
      onOk={onDismiss}
      onCancel={onDismiss}
      width="432px"
      footer={
        <div className="connect-footer">
          <Button onClick={onDismiss}>Close</Button>
        </div>
      }>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? '8px' : '0'}
        />
      ))}
    </Modal>
  )
}

export default ConnectModal
