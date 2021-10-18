/** @format */

import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Countdown from 'components/Countdown'
import {Button, Tooltip} from 'antd'
import ProductDetails from 'components/Item/ProductDetails'
import {useWeb3React} from '@web3-react/core'
import {formatUnits} from 'ethers/lib/utils'
import {useWalletModal} from 'components/WalletModal'
import BuyModal from 'components/Item/BuyModal'
import StatusModal from 'components/Item/statusModal'
import useAuth from 'hooks/useAuth'
import useModal from 'hooks/useModal'
import {useDistribution, useNFTContract} from 'hooks/useContract'
import {checkWhiteList, registerWhiteList, buyOne} from 'utils/operate'
import {BigNumber} from '@ethersproject/bignumber'
import EventBanner from 'img/event_banner.png'
import SuccessIcon from 'img/icon-success@2x.png'
import HotIcon from 'img/hot@2x.png'
import RightIcon from 'img/icon_right2@2x.png'
import 'style/item/index.less'

export default function ActiveItem() {
  const {account} = useWeb3React()
  // const contract = useDistribution()

  // const nftContract = useNFTContract()

  const [isChecked, setIsChecked] = useState(false)
  const {login, logout} = useAuth()
  const {onPresentConnectModal, onPresentAccountModal} = useWalletModal(login, logout, account || undefined)

  // async function toCheckWhiteList() {
  //   if (contract && account) {
  //     // const isChecked = await checkWhiteList(contract, account)
  //     const isChecked = await checkWhiteList(nftContract, account)
  //     setIsChecked(isChecked)
  //   }
  // }
  // let timer:any
  // async function toRegisterWhiteList() {
  //   await registerWhiteList(contract)
  //   timer = setInterval(() => {
  //     if (!isChecked && account && contract) {
  //       toCheckWhiteList()
  //     } else {
  //       clearInterval(timer)
  //     }
  //   }, 1000)
  // }

  // useEffect(() => {
  //   if (account && contract) {
  //     toCheckWhiteList()
  //   }
  // }, [account, contract])

  // 账户里nft数量大于4则进制购买
  const [nftBalance, setNftBalance] = useState(0)
  // async function getNFTBalance() {
  //   const balance = formatUnits(await nftContract.balanceOf(account), '0')
  //   setNftBalance(Number(balance))
  // }

  const [price, setPrice] = useState('')

  // async function getNFTPrice() {
  //   const p = await nftContract.publicPrice()
  //   setPrice(p)
  // }

  // useEffect(() => {
  //   if (nftContract && account) {
  //     // getNFTBalance()
  //     // getNFTPrice()
  //   }
  // }, [account, nftContract])

  // function calculateGasMargin(value: BigNumber): BigNumber {
  //   return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
  // }

  // const [status, setStatus] = useState('')
  // const [hash, setHash] = useState('')

  // const toBuy = async (value: number) => {
  //   try {
  //     const methodNames = ['mint']
  //     // const price = formatUnits(await nftContract.publicPrice(), 18)
  //     const price = await nftContract.publicPrice()
  //     console.log('price#####', price)
  //     const amount = BigNumber.from(value).mul(BigNumber.from(String(price)))
  //     console.log('amount#####', amount.toString())
  //     const options = {
  //       from: account,
  //       value: amount.toString(),
  //     }
  //     const safeGasEstimates: (BigNumber | undefined)[] = await Promise.all(
  //       methodNames.map((methodName, index) =>
  //         nftContract.estimateGas[methodName](value, options)
  //           .then(calculateGasMargin)
  //           .catch(e => {
  //             console.error('estimateGas failed', index, e)
  //             return undefined
  //           }),
  //       ),
  //     )

  //     if (safeGasEstimates[0]) console.log('safeGasEstimates####', safeGasEstimates[0].toString())

  //     const gasLimit = safeGasEstimates[0] ? safeGasEstimates[0].toString() : 210000

  //     const tx = await nftContract.mint(value, {...options, gasLimit})
  //     console.log('tx#####', tx)
  //     setStatus('success')
  //     setHash(tx.hash)
  //     setTimeout(() => openStatusModal(), 500)

  //     const receipt = await tx.wait()
  //     console.log('receipt#####', receipt)
  //     console.log('receipt.status#####', receipt.status)
  //   } catch (e) {
  //     console.log('e#####', e)
  //     setStatus('error')
  //     setHash('')
  //     setTimeout(() => openStatusModal(), 500)
  //   }

  //   // // onDismiss()
  // }

  const history = useHistory()
  function gotoMynft() {
    // console.log('history####', history)
    history.push('/mynfts')
  }

  // const [openBuyModal] = useModal(<BuyModal toBuy={toBuy} price={price}></BuyModal>)
  // const [openStatusModal] = useModal(<StatusModal status={status} hash={hash} gotoMynft={gotoMynft}></StatusModal>)




  return (
    <div className="item-container">
      <div className="top-box">
        <div className="img-box">
          <img src={EventBanner} />
        </div>
        <div className="info-box">
          <div className="title">
            <h3>CheekyCorgi NFT Collection Presale</h3>
            <div className="label">Presale</div>
          </div>
          <ul className="list">
            <li>
              <div>Total Quantity</div>
              <p>888</p>
            </li>
            {/* <li>
              <div>Available Quantity</div>
              <p>888</p>
            </li> */}
            <li>
              <div>Max Per Account</div>
              <p>4</p>
            </li>
            <li>
              <div>Sale Period</div>
              {/* <p>09/01 19:00 - 10/01 19:00</p> */}
              <p>20:00PM, Nov 8, 2021. (GMT+8) - TBD</p>
            </li>
          </ul>
          <div className="countdown-box">
            <div className="title">
              <span>Price</span>
              {/* <span>Sale starts in</span> */}
            </div>
            <div className="price">
              <div className="left">
                <div className="num">0.03 ETH</div>
                {/* <p>≈ $ 27.99</p> */}
              </div>
              <div className="countdown-wrap">
                <Countdown size="small"></Countdown>
              </div>
            </div>
          </div>

          {!isChecked ? <div className="qualified"></div> : null}
          {isChecked && nftBalance <= 4 ? (
            <div className="qualified">
              <img src={SuccessIcon} />
              <span>Your are eligible to participate</span>
            </div>
          ) : null}
          {isChecked && nftBalance > 4 ? <div className="qualified"></div> : null}

          {!account ? <Button onClick={() => onPresentConnectModal()}>Connect Wallet</Button> : null}
          {account && !isChecked ? (
            <Button type="primary" disabled>
              Buy Now
            </Button>
          ) : null}

          {account && isChecked && nftBalance < 4 ? (
            // <Button type="primary" disabled>
            // <Button type="primary" onClick={() => openBuyModal()}>
            <Button type="primary" disabled={new Date().getTime() < 1636372800000}>
              Buy Now
            </Button>
          ) : null}

          {account && isChecked && nftBalance > 4 ? (
            <Tooltip placement="bottom" title="You have reached the max purchase limit">
              <Button type="primary" disabled>
                Buy Now
              </Button>
            </Tooltip>
          ) : null}

          {/* <Button type="primary" onClick={() => openBuyModal()}>
            test buy modal
          </Button> */}
          {/* <Button type="primary" onClick={() => openStatusModal()}>
            test status modal
          </Button> */}
        </div>
      </div>
      <div className="product-detail-box">
        <h3 className="title">
          <div>Product Details</div>
          <a href="https://docs.google.com/forms/d/1TVJVUVjKz5O2wpYnpBhOiPczk3zVRQ4NGXuGDk4gSlI/edit" target="_blank">
            <img src={HotIcon} className="hot-icon" />
            <span>Get Whitelisted</span>
            <img src={RightIcon} className="right-icon" />
          </a>
        </h3>
        <ProductDetails></ProductDetails>
      </div>
    </div>
  )
}
