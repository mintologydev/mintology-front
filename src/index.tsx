/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import './i18n.ts'
import './index.css'
import './style/global.less'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Providers from './Providers'

if ('ethereum' in window) {
  ;(window.ethereum as any).autoRefreshOnNetworkChange = false
}
;``
window.addEventListener('error', () => {
  localStorage?.removeItem('redux_localstorage_simple_lists')
})

ReactDOM.render(
  // <React.StrictMode>
  <Providers>
    <App />
  </Providers>,
  // </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
