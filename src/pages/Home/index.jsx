/** @format */

import React from 'react'
// import MysteryBoxesBlock from 'components/Home/MysteryBoxesBlock'
import ActiveBlock from 'components/Home/ActiveBlock'
// import Allitems from 'components/Home/Allitems'
import 'style/home/index.less'

export default function Home() {
  return (
    <div className="home-container">
      <a
        href="https://docs.google.com/forms/d/1TVJVUVjKz5O2wpYnpBhOiPczk3zVRQ4NGXuGDk4gSlI/edit"
        target="_blank"
        className="banner"></a>
      <div className="body">
        <ActiveBlock></ActiveBlock>
        {/* <MysteryBoxesBlock></MysteryBoxesBlock> */}
        {/* <Allitems></Allitems> */}
      </div>
    </div>
  )
}
