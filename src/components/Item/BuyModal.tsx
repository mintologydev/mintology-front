/** @format */

import React, {useState} from 'react'
import {Button, Modal} from 'antd'
import 'style/item/buy-modal.less'

const defaultOnDismiss = () => null

type BuyModalProps = {
  onDismiss?: () => void
  toBuy: (value: number) => Promise<void>
  price: string
}

const BuyModal = ({price='', toBuy, onDismiss = defaultOnDismiss}: BuyModalProps) => {
  const [value, setValue] = useState(0)
  const [total, setTotal] = useState(0)
  const onChange = event => {
    setValue(event.target.value)
    setTotal(Number(event.target.value) * 0.03)
  }

  const Increase = () => {
    const n = Number(value) + 1
    setValue(n)
    setTotal(n * 0.03)
  }

  const Reduce = () => {
    let n = Number(value) - 1
    if (n < 0) {
      n = 0
    }
    setValue(n)
    setTotal(n * 0.03)
  }

  const [cansubmit, setCansubmit] = useState(false)

  return (
    <Modal
      title="NFT name text"
      visible={true}
      onOk={onDismiss}
      onCancel={onDismiss}
      closeIcon={
        <svg className="modal-close-icon" aria-hidden="true">
          <use xlinkHref="#icon-icon_close"></use>
        </svg>
      }
      footer={[
        <Button
          key="1"
          className="modal-one-btn"
          type="primary"
          onClick={() => {
            setCansubmit(true)
            toBuy(value)
          }}
          disabled={value < 1 || cansubmit}>
          Confirm
        </Button>,
      ]}>
      <div className="buy-modal">
        <div className="info-box">
          <img />
          <div className="info">
            <h3>Price</h3>
            <div className="num">
              <span className="big">0.03 ETH</span>
              {/* <span className="small">≈ $ 27.99</span> */}
            </div>
            {/* <p>The Remain Amount：100</p> */}
          </div>
        </div>
        <div className="input-box">
          <button onClick={() => Reduce()} disabled={value === 0}>
            -
          </button>
          <input type="number" placeholder="Amount" value={value} onChange={onChange} />
          <button onClick={() => Increase()}>+</button>
        </div>
        <div className="total">
          <span>Total</span>
          <span>{total} ETH</span>
        </div>
      </div>
    </Modal>
  )
}

export default BuyModal
