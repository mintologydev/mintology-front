/** @format */

import React, {useState, useEffect} from 'react'

type MyNftsProps = {
  name: number
}

const MyNfts = (props: MyNftsProps) => {
  const {name} = props

  const [showAddress, setShowAddress] = useState(false)

  return (
    <div className={showAddress ? 'item height-auto' : 'item'}>
      <div className="img-box">
        <img />
      </div>
      <div className="introduce">
        <h3>NFT name {name}</h3>
        <p>介绍缩略文本介绍缩略文本介绍缩略文本介绍缩略文本介绍缩略文本介绍缩略文本</p>
      </div>
      <div className="info-box">
        <div className="price-box" onClick={() => setShowAddress(!showAddress)}>
          <div className="left">0.1235ETH</div>
          <div className="right">
            <span>#01/100</span>
            <div className="toggle-btn">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-icon_return"></use>
              </svg>
            </div>
          </div>
        </div>
        {showAddress ? (
          <div className="address">
            <h3>Contract Address</h3>
            <a>
              <span>02345s......dert62345</span>
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
