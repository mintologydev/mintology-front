/** @format */

import React from 'react'
import {Button, Typography, Modal} from 'antd'
import CopyToClipboard from './CopyToClipboard'
import {connectorLocalStorageKey} from './config'
import 'style/wallet.less'

const {Text, Link} = Typography

interface Props {
  account: string
  logout: () => void
  onDismiss?: () => void
}

const ConnectorNames: any = {
  injected: 'Metamask',
  walletconnect: 'WalletConnect',
  bsc: 'BSC',
}

const AccountModal: React.FC<Props> = ({account, logout, onDismiss = () => null}) => {
  const currentPlatformKey: any = localStorage.getItem('currentPlatform') || 'injected'
  const currentPlatform = ConnectorNames[currentPlatformKey]

  const accountEllipsis = account ? `${account.substring(0, 8)}...${account.substring(account.length - 8)}` : null

  return (
    <Modal
      title="Account"
      visible={true}
      onOk={onDismiss}
      onCancel={onDismiss}
      width="432px"
      closeIcon={
        <svg className="modal-close-icon" aria-hidden="true">
          <use xlinkHref="#icon-icon_close"></use>
        </svg>
      }
      footer={
        <div className="account-footer">
          <Button
            onClick={() => {
              logout()
              window.localStorage.removeItem(connectorLocalStorageKey)
              onDismiss()
            }}>
            Disconnect
          </Button>
          <a className="view" href={`https://etherscan.io/address/${account}`}>
            View on Explorer
          </a>
        </div>
      }>
      {/* <div style={{background: '#F5F5F5', paddingTop: '20px'}}>
        <Text style={{color: '#666666', fontSize: '14px', textAlign: 'center'}}>Connected with {currentPlatform} </Text>
        <Text
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginBottom: '8px',
            textAlign: 'center',
            padding: '32px 0px',
          }}>
          {account.substring(0, 4)}...{account.substring(account.length - 4)}
        </Text>
        <div style={{padding: '0px 50px'}}>
          <CopyToClipboard toCopy={account}>
            <span style={{fontSize: '14px', color: '#666'}}>Copy Address</span>
          </CopyToClipboard>
          <Link href={`https://bscscan.com/address/${account}`} style={{fontSize: '14px', color: '#666'}}>
            View on BscScan
          </Link>
        </div>
      </div>
      <div>
        <Button
          style={{width: '100%', marginTop: '20px'}}
          onClick={() => {
            logout()
            window.localStorage.removeItem(connectorLocalStorageKey)
            onDismiss()
          }}>
          Logout
        </Button>
      </div> */}
      <div className="wallet-account-box">
        <div className="platform">
          <p>Connected with {currentPlatform}</p>
          <Button>Change</Button>
        </div>
        <div className="account">
          <p>{accountEllipsis}</p>
          <CopyToClipboard toCopy={account}>
            <Button>copy</Button>
          </CopyToClipboard>
        </div>
      </div>
    </Modal>
  )
}

export default AccountModal
