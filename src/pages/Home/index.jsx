/** @format */

import React from 'react'
import MysteryBoxesBlock from 'components/Home/MysteryBoxesBlock'
import ActiveBlock from 'components/Home/ActiveBlock'
import Allitems from 'components/Home/Allitems'
import 'style/home/index.less'

export default function Home() {
  return (
    <div className="home-container">
      <div className="banner">banner</div>
      <div className="body">
        <ActiveBlock></ActiveBlock>
        <MysteryBoxesBlock></MysteryBoxesBlock>
        <Allitems></Allitems>
      </div>
    </div>
  )
}
