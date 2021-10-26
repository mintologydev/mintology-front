/** @format */

import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'antd'
import {useWeb3React} from '@web3-react/core'
// import {useDispatch} from 'react-redux'
// import {useSelector} from 'hooks/useSelector'
import {useWalletModal} from 'components/WalletModal'
import TestModal from 'components/TestModal'
import useModal from 'hooks/useModal'
import useAuth from 'hooks/useAuth'
import {useDistribution} from 'hooks/useContract'
// import {activityListSlice} from 'store/activity/slice'
import Logo from '../../img/mintology-logo@2x.png'
import '../../style/menu.less'

const Menu: React.FC = props => {
  const {children} = props
  const contract = useDistribution()
  const {account} = useWeb3React()
  const {login, logout} = useAuth()
  const {onPresentConnectModal, onPresentAccountModal} = useWalletModal(login, logout, account || undefined)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null

  const [openTest] = useModal(<TestModal></TestModal>)

  // const {data} = useSelector(state => state.activity)
  // console.log('test####', data)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(
  //     activityListSlice.actions.fetchSuccess({
  //       data: [
  //         {id: 0, name: 'test1'},
  //         {id: 1, name: 'test2'},
  //       ],
  //     }),
  //   )
  // }, [])

  async function getInitData() {
    // 白名单开启的时间戳
    const WLStartTs = await contract.WLStartTs()
    // // 白名单关闭时间戳
    const WLEndTs = await contract.WLEndTs()
    // // 购买状态开启的时间戳
    const MarketStartTs = await contract.MarketStartTs()
    // // 购买状态关闭的时间戳
    const MarketEndTs = await contract.MarketEndTs()

    console.log('WLStartTs####', WLStartTs)
    console.log('WLEndTs####', WLEndTs)
    console.log('MarketStartTs####', MarketStartTs)
    console.log('MarketEndTs####', MarketEndTs)
  }

  // 获取合约中的活动相关时间
  // useEffect(() => {
  //   if (contract && account) {
  //     // 上线时不用判断account, 目前是为了节省infura自己申请的免费id的请求次数
  //     // setTimeout(() => {
  //     getInitData()
  //     // }, 10000)
  //   }
  // }, [contract, account])


  const [showMenu, setShowMenu] = useState(false)

  const history = useHistory()

  function gotoMynfts() {
    history.push('/mynfts')
  }

  return (
    <div className="menu-container">
      <nav>
        <a className="logo" href="https://www.mintology.studio/" target="_blank">
          <img src={Logo} />
        </a>
        <div className="right pc">
          <a href="/">HOME</a>
          <a onClick={() => gotoMynfts()}>My NFTs</a>

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
        <div className="right h5">
          <svg className="icon" aria-hidden="true" onClick={() => setShowMenu(true)}>
            <use xlinkHref="#icon-icon_menu-fold-one"></use>
          </svg>
        </div>
      </nav>
      {showMenu ? <div className="menu-list-mask-h5" onClick={() => setShowMenu(false)}></div> : null}
      {showMenu ? (
        <div className="menu-list-box-h5">
          <div className="icon-box">
            <svg className="icon" aria-hidden="true" onClick={() => setShowMenu(false)}>
              <use xlinkHref="#icon-icon_menu-Unfold"></use>
            </svg>
          </div>
          <div className="wallet-btn-box">
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
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a>My NFTs</a>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="main">{children}</div>
      <footer>© 2021 Mintology. All rights reserved.</footer>
    </div>
  )
}

export default Menu
