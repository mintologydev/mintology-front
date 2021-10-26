/** @format */

import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import EventBanner1 from 'img/lunbo1.png'
import EventBanner2 from 'img/lunbo2@2x.png'
import EventBanner3 from 'img/lunbo3@2x.png'
import EventBannerH51 from 'img/lunbotu1h5.png'
import EventBannerH52 from 'img/lunbotu2h5.jpg'
import EventBannerH53 from 'img/lunbotu3h5.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import MysteryBoxesBlock from 'components/Home/MysteryBoxesBlock'
import ActiveBlock from 'components/Home/ActiveBlock'
// import Allitems from 'components/Home/Allitems'
import 'style/home/index.less'

export default function Home() {
  return (
    <div className="home-container">
      <div
        // href="javascript:;"
        // target="_blank"
        className="banner">
        <Carousel
          showArrows={true}
          style={{width: '500px'}}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          emulateTouch
          infiniteLoop
          autoPlay
          interval={5000}>
          <a href="https://docs.google.com/forms/d/1TVJVUVjKz5O2wpYnpBhOiPczk3zVRQ4NGXuGDk4gSlI/edit" target="_blank">
            <div>
              {' '}
              <img className="pc" src={EventBanner1} />{' '}
              <img className="h5" src={EventBannerH51} />{' '}
            </div>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSegedaz8gALdSjmCZs0nqf_GFQqiE-O7becslq-RA6-VT-1jw/viewform"
            target="_blank">
            <div>
              <img className="pc" src={EventBanner2} />
              <img className="h5" src={EventBannerH52} />{' '}
            </div>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSegedaz8gALdSjmCZs0nqf_GFQqiE-O7becslq-RA6-VT-1jw/viewform"
            target="_blank">
            <div>
              <img className="pc" src={EventBanner3} />
              <img className="h5" src={EventBannerH53} />{' '}
            </div>
          </a>
        </Carousel>
      </div>
      <div className="body">
        <ActiveBlock></ActiveBlock>
        {/* <MysteryBoxesBlock></MysteryBoxesBlock> */}
        {/* <Allitems></Allitems> */}
      </div>
    </div>
  )
}
