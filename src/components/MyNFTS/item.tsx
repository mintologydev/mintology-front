/** @format */

import React, {useState, useEffect} from 'react'
import {Spin} from 'antd'

type MyNftsProps = {
  info: any,
  isLoading: boolean
}

const MyNfts = (props: MyNftsProps) => {
  const {info, isLoading} = props
  const [showAddress, setShowAddress] = useState(false)

  return (
    <div className={showAddress ? 'item height-auto' : 'item'}>
      {isLoading ? <Spin /> : null}
      <div className="img-box">
        <img src={info.image} />
      </div>
      <div className="info-box">
        <div className="name-box" onClick={() => setShowAddress(!showAddress)}>
          <h3>
            <span>{info.name}</span>
            {info.name ? <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-icon-down"></use>
            </svg> : null}
          </h3>
          <p>{info.id}</p>
        </div>
        {showAddress ? (
          <div className="address">
            <h3>Contract Address</h3>
            <a href="https://rinkeby.etherscan.io/address/0xcb0eccd1d9c9250855175d849f3efe122c12c0bd" target="_blank">
              <span>0xcb0e......12c0bd</span>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-icon_arrow-right-up"></use>
              </svg>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default MyNfts
