/** @format */

import React from 'react'
import {Button} from 'antd'
import {useWeb3React} from '@web3-react/core'
import {useWalletModal} from 'components/WalletModal'
import TestModal from 'components/TestModal'
import useModal from 'hooks/useModal'
import useAuth from 'hooks/useAuth'
import Logo from '../../img/mintology-logo@2x.png'
import '../../style/menu.less'

const Menu: React.FC = props => {
  const {children} = props
  const {account} = useWeb3React()
  const {login, logout} = useAuth()
  const {onPresentConnectModal, onPresentAccountModal} = useWalletModal(login, logout, account || undefined)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null

  const [openTest] = useModal(<TestModal></TestModal>)

  return (
    <div className="container">
      <nav>
        <a className="logo">
          <img src={Logo} />
        </a>
        <div className="right">
          <a>HOME</a>
          <a>My NFTs</a>

          {!account ? (
            <Button type="primary" onClick={() => onPresentConnectModal()}>
              Connect Wallet
            </Button>
          ) : (
            <Button type="primary" onClick={() => onPresentAccountModal()}>
              {accountEllipsis}
            </Button>
          )}
        </div>
      </nav>
      <div className="main">{children}</div>
      <footer>© 2021 Mintology. All rights reserved.</footer>
    </div>
  )
}

export default Menu
