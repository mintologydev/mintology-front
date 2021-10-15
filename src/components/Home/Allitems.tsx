/** @format */
import React from 'react'
import 'style/home/all-items.less'

export default function AllItems() {
  return (
    <div className="all-items">
      <div className="title">
        <h3>ALL ITEMS</h3>
        <div className="prev-and-next">
          <svg className="icon prev" aria-hidden="true">
            <use xlinkHref="#icon-icon_right2-sel"></use>
          </svg>
          <svg className="icon next" aria-hidden="true">
            <use xlinkHref="#icon-icon_right2-sel"></use>
          </svg>
        </div>
      </div>
      <div className="list">
        <div className="item">
          <img />
          <span className="activity">Activity</span>
          {/* <div className="name">NFT ARTWORK</div> */}
        </div>
        <div className="item">
          <img />
          <span className="pre-launch">Pre-Launch</span>
          {/* <div className="name">NFT ARTWORK</div> */}
        </div>
        <div className="item">
          <img />
          <span className="ending">已结束</span>
          {/* <div className="name">NFT ARTWORK</div> */}
        </div>
      </div>
    </div>
  )
}
