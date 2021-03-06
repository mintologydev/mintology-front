/** @format */

import {ConnectorNames} from '../components/WalletModal/types'
import {Web3Provider} from '@ethersproject/providers'
import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import {WalletLinkConnector} from '@web3-react/walletlink-connector'
import {NetworkConnector} from './NetworkConnector'
import {ChainId} from '../constants'

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL

// export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '97')
export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? String(ChainId.MAINNET))
// export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '1')

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

export const network = new NetworkConnector({
  urls: {[NETWORK_CHAIN_ID]: NETWORK_URL},
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({
  // supportedChainIds: [1],
  supportedChainIds: [ChainId.MAINNET],
  // supportedChainIds: [97],
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: {[NETWORK_CHAIN_ID]: NETWORK_URL, '1': 'https://mainnet.infura.io/v3/e076c591970f48869749c708c5b939e5'},
  // rpc: {[NETWORK_CHAIN_ID]: NETWORK_URL, '4': 'https://rinkeby.infura.io/v3/0a857661bfc94df5b1c9ad928d74d660'},
  // rpc: {
  //   [NETWORK_CHAIN_ID]: NETWORK_URL,
  //   [NETWORK_CHAIN_ID]:
  //     ChainId.MAINNET !== 4
  //       ? 'https://mainnet.infura.io/v3/e076c591970f48869749c708c5b939e5'
  //       : 'https://rinkeby.infura.io/v3/0a857661bfc94df5b1c9ad928d74d660',
  // },
  // rpc: {[NETWORK_CHAIN_ID]: NETWORK_URL, '97': 'https://data-seed-prebsc-1-s1.binance.org:8545'},
  // bridge: 'https://bridge.walletconnect.org',
  // bridge: 'https://rinkeby.etherscan.io',
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000,
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URL,
  appName: 'Uniswap',
  appLogoUrl:
    'https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg',
})

export const connectorsByName: {[connectorName in ConnectorNames]: any} = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
}
