/** @format */

import React, {Suspense} from 'react'
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom'
import useEagerConnect from 'hooks/useEagerConnect'
import Menu from './components/Menu'
import Test from './pages/Test'
import Home from './pages/Home'
import ActiveItem from './pages/ActiveItem'
import ActiveItemDod from './pages/ActiveItemDod'
import MysteryBoxeItem from './pages/MysteryBoxeItem'
import MyNFTs from './pages/MyNFTs'
// import './App.less'
import './style/base.less'
import './style/global.less'
import './style/antdesign.less'

export default function App() {
  useEagerConnect()
  return (
    <Suspense fallback={null}>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Menu>
          <Switch>
            <Route exact strict path="/" component={Home}></Route>
            {/* <Route exact strict path="/item/:id" component={ActiveItem}></Route> */}
            <Route exact strict path="/ccItem" component={ActiveItem}></Route>
            <Route exact strict path="/dodItem" component={ActiveItemDod}></Route>
            <Route exact strict path="/boxItem/:id" component={MysteryBoxeItem}></Route>
            <Route exact strict path="/mynfts" component={MyNFTs}></Route>
          </Switch>
        </Menu>
      </HashRouter>
      {/* </BrowserRouter> */}
    </Suspense>
  )
}
