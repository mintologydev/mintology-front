/** @format */

import React from 'react'
import {Button} from 'antd'
import Countdown from 'components/Countdown'
import 'style/home/mystery-boxes-block.less'

export default function MysteryBoxesBlock() {
  return (
    <div className="mystery-boxes-block">
      <div className="center">
        <div className="left">
          <h3 className="title">MYSTERY BOXES</h3>
          <p className="sub-title">Mystery Boxes Mystery Boxes</p>

          <div className="sale-ends-countdown">
            <h3>Sale ends in</h3>
            <Countdown></Countdown>
            <Button type="primary">View item</Button>
          </div>
        </div>
        <div className="right">
          <img />
        </div>
      </div>
    </div>
  )
}
