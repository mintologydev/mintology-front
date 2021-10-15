/** @format */

import React from 'react'
import Item from 'components/MyNFTS/item'
import 'style/mynfts/index.less'

export default function MyNFTS() {
  const list = [{name: 1}, {name: 2}, {name: 3}, {name: 4}]
  return (
    <div className="my-nfts-container">
      <h3 className="title">MY NFTS</h3>
      <div className="list">
        {list.map(item => (
          <Item name={item.name} key={item.name}></Item>
        ))}
      </div>
    </div>
  )
}
