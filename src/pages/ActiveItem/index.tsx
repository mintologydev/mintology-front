/** @format */

import React from 'react'
import Countdown from 'components/Countdown'
import {Button} from 'antd'
import ProductDetails from 'components/Item/ProductDetails'
import 'style/item/index.less'

export default function ActiveItem() {
  return (
    <div className="item-container">
      <div className="top-box">
        <div className="img-box">
          <img />
        </div>
        <div className="info-box">
          <div className="title">
            <h3>NFT name text Pandora’s Blindbox by Fear NFT Games</h3>
            <div className="label">Pre-Launch</div>
          </div>
          <ul className="list">
            <li>
              <div>Total Amount</div>
              <p>1000000</p>
            </li>
            <li>
              <div>Sale Period</div>
              <p>09/01 19:00 - 10/01 19</p>
            </li>
            <li>
              <div>The Remain Amount</div>
              <p>Pendingh</p>
            </li>
          </ul>
          <div className="countdown-box">
            <div className="title">
              <span>Price</span>
              <span>Auction ends in</span>
            </div>
            <div className="price">
              <div className="left">
                <div className="num">0.15 ETH</div>
                <p>≈ $ 27.99</p>
              </div>
              <div className="countdown-wrap">
                <Countdown size="small"></Countdown>
              </div>
            </div>
          </div>
          <Button type="primary">Get Whilelisted</Button>
        </div>
      </div>
      <div className="product-detail-box">
        <h3 className="title">Product Details</h3>
        <ProductDetails></ProductDetails>
      </div>
    </div>
  )
}
