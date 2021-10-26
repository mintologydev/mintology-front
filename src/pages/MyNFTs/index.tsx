/** @format */

import React, {useState, useEffect} from 'react'
import fetchJSONP from 'fetch-jsonp'
import axios from 'axios'
import Item from 'components/MyNFTS/item'
import {useWeb3React} from '@web3-react/core'
import {formatUnits} from 'ethers/lib/utils'
import {useNFTContract} from 'hooks/useContract'
import NodataImg from 'img/icon_data@2x.png'
import 'style/mynfts/index.less'

export default function MyNFTS() {
  const {account} = useWeb3React()
  const [nftBalance, setNftBalance] = useState(0)
  const nftContract = useNFTContract()
  const [list, setList] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)
  async function getNFTBalance() {
    setIsLoading(true)
    const balance = formatUnits(await nftContract.balanceOf(account), '0')
    setNftBalance(Number(balance))
    const defaultList = new Array(Number(balance)).fill({name: '', image: ''})
    setList(defaultList)
    const listData: any = []
    for (let i = 0; i < Number(balance); i++) {
      const serialNumber = await nftContract.tokenOfOwnerByIndex(account, i)
      const tokenURI = await nftContract.tokenURI(serialNumber)
      // const res = await fetch(`/api/${serialNumber}`)
      // const res = await fetch(tokenURI, {
      //   credentials: 'include',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     // 'Content-Type':
      //       // 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      //   },
      // })
      // const res = await fetchJSONP(tokenURI)
      const res = await axios({
        method: 'GET',
        url: tokenURI,
      })
      console.log('res####', res)
      // const data = await res.json()
      // const data = res.data
      // const string = data.name || ''
      // const arr = string.split(' ')
      // const name = arr[0] || ''
      // const id = arr[1] || ''
      // listData.push({
      //   ...data,
      //   name,
      //   id,
      // })
    }
    setList(listData)
    setIsLoading(false)
  }

  useEffect(() => {
    if (nftContract && account) {
      getNFTBalance()
    }
  }, [account, nftContract])

  return (
    <div className="my-nfts-container">
      <h3 className="title">MY NFTS</h3>
      {list && list.length > 0 ? (
        <div className="list">
          {list.map((item, index) => (
            <Item info={item} key={index} isLoading={isLoading}></Item>
          ))}
        </div>
      ) : null}
      {!list || list.length < 1 ? (
        <div className="no-data">
          <div className="img-block">
            <img src={NodataImg} />
          </div>
          <p>No Data</p>
        </div>
      ) : null}
    </div>
  )
}
