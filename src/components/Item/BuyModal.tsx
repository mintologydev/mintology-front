/** @format */

import React from 'react'
import {Modal} from 'antd'
import 'style/item/buy-modal.less'

const defaultOnDismiss = () => null

type TestModalProps = {
  onDismiss?: () => void
}

const TestModal = ({onDismiss = defaultOnDismiss}: TestModalProps) => {
  return (
    <Modal title="NFT name text" visible={true} onOk={onDismiss} onCancel={onDismiss}>
      <div className="buy-modal">
        <div className="info-box">
          <img />
          <div className="info">
            <h3>Price</h3>
            <div className="num">
              <span className="big">0.15 ETH</span>
              <span>0.15 ETH</span>
            </div>
            <p>The Remain Amount：100</p>
          </div>
        </div>
        <div className="input-box">
          <span>-</span>
          <input type="text" placeholder="Amount" />
          <span>+</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>0.2234 ETH</span>
        </div>
      </div>
    </Modal>
  )
}

export default TestModal
