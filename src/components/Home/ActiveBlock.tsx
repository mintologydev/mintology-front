/** @format */

import React from 'react'
import {useHistory} from 'react-router-dom'
import Countdown from 'components/Countdown'
import 'style/home/active-block.less'
import {Button} from 'antd'

export default function ActiveBlock() {
  const history = useHistory()

  function gotoItem(id) {
    history.push(`/item/${id}`)
  }

  return (
    <div className="active-block">
      <div className="left">
        <img />
      </div>
      <div className="right">
        <h3>NFT name text Pandora’s Blindbox by Fear NFT Games</h3>
        <div className="start-countdown-box">
          <div className="title">
            <span>Sale starts in</span>
            <span>0.15 ETH</span>
          </div>
          <Countdown></Countdown>
          <Button type="primary" onClick={() => gotoItem(1)}>
            View item
          </Button>
        </div>
      </div>
    </div>
  )
}
