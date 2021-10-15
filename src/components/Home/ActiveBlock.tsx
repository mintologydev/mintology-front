/** @format */

import React from 'react'
import {useHistory} from 'react-router-dom'
import Countdown from 'components/Countdown'
import 'style/home/active-block.less'
import {Button} from 'antd'
import EventBanner from 'img/event_banner.png'
import EthIcon from 'img/ETH@2x.png'
import ComingSoonImg from 'img/icon_data@2x.png'

export default function ActiveBlock() {
  const history = useHistory()

  function gotoItem(id) {
    history.push(`/item/${id}`)
  }

  return (
    <div className="active-block">
      <div className="left">
        <img src={EventBanner} />
      </div>
      <div className="right">
        <h3>CheekyCorgi NFT Collection Presale</h3>
        <div className="start-countdown-box">
          <div className="title">
            <span>Sale starts in</span>
            {/* <div>
              <img src={EthIcon} />
              <span>0.03 ETH</span>
            </div> */}
          </div>
          <Countdown></Countdown>
          <Button type="primary" onClick={() => gotoItem(1)}>
            Check Details
          </Button>
        </div>
        {/* <div className="coming-soon">
          <img src={ComingSoonImg} />
          <p>Coming Soon</p>
          <Button type="primary" onClick={() => gotoItem(1)}>
            Join Whitelist
          </Button>
        </div> */}
      </div>
    </div>
  )
}
