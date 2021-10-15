/** @format */

import {ConnectorNames} from '../components/WalletModal/types'
import {Web3Provider} from '@ethersproject/providers'
import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import {WalletLinkConnector} from '@web3-react/walletlink-connector'
import {NetworkConnector} from './NetworkConnector'

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '1')

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
  // supportedChainIds: [4],
  supportedChainIds: [97],
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
  // rpc: {[NETWORK_CHAIN_ID]: NETWORK_URL, '1': 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'},
  // rpc: {[NETWORK_CHAIN_ID]: NETWORK_URL, '4': 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'},
  rpc: {[NETWORK_CHAIN_ID]: NETWORK_URL, '97': 'https://data-seed-prebsc-1-s1.binance.org:8545'},
  // bridge: 'https://bridge.walletconnect.org',
  // bridge: 'https://rinkeby.etherscan.io',
  bridge: 'https://testnet.bscscan.com',
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
