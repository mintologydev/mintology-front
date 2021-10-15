/** @format */

import React from 'react'
import {Button, Modal} from 'antd'
import IconSuccess from 'img/icon_success@2x.png'
import IconFail from 'img/icon_fail@2x.png'
import 'style/item/status-modal.less'

const defaultOnDismiss = () => null

type StatusModalProps = {
  gotoMynft?: () => void
  status?: string // success, error
  hash?: any
  onDismiss?: () => void
}

const StatusModal = ({
  gotoMynft = defaultOnDismiss,
  status = 'success',
  hash = 'xxx',
  onDismiss = defaultOnDismiss,
}: StatusModalProps) => {

  function toMynfts() {
    gotoMynft()
    onDismiss()
  }

  return (
    <Modal
      title="Buy NFTs"
      visible={true}
      onOk={onDismiss}
      onCancel={onDismiss}
      closeIcon={
        <svg className="modal-close-icon" aria-hidden="true">
          <use xlinkHref="#icon-icon_close"></use>
        </svg>
      }
      footer={[
        <Button key="1" className="modal-one-btn status-modal-btn" type="primary" onClick={() => toMynfts()}>
          View My NFTs
        </Button>,
      ]}>
      <div className="status-modal">
        <div className="img-box">{status === 'success' ? <img src={IconSuccess} /> : <img src={IconFail} />}</div>
        <h3>{status === 'success' ? 'Transaction Submitted' : 'Transaction Rejected'}</h3>
        {status === 'success' && hash ? (
          <a href={`https://rinkeby.etherscan.io/tx/${hash}`} target="_blank">
            <span>View on Explorer</span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-icon_arrow-right-up"></use>
            </svg>
          </a>
        ) : null}
      </div>
    </Modal>
  )
}

export default StatusModal
