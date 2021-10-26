/** @format */

import React from 'react'
import {useHistory} from 'react-router-dom'
import Countdown from 'components/Countdown'
import 'style/home/active-block.less'
import {Button} from 'antd'
import EventBanner1 from 'img/event_banner.png'
import EventBanner2 from 'img/event_banner2.png'
import EthIcon from 'img/ETH@2x.png'
import ComingSoonImg from 'img/icon_data@2x.png'

const ActiveBlock = props => {
  const history = useHistory()

  function gotoCcItem() {
    history.push('/ccItem')
  }
  function goDodItem() {
    history.push('/dodItem')
  }

  return (
    <div className="active-block">
      <div className="active-block-item">
        <div className="left">
          <h3>CheekyCorgi NFT Collection Presale</h3>
          <img src={EventBanner1} />
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
            <Button type="primary" onClick={() => gotoCcItem()}>
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
      <div className="active-block-item">
        <div className="left">
          <h3>DJz of DGEN NFT Collection Presale</h3>
          <img src={EventBanner2} />
        </div>
        <div className="right">
          <h3>DJz of DGEN NFT Collection Presale</h3>
          <div className="coming-soon">
            <img src={ComingSoonImg} />
            <p>Coming Soon</p>
            <Button type="primary" onClick={() => goDodItem()}>
              Check Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ActiveBlock
