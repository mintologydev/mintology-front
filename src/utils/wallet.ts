/** @format */

// Set of helper functions to facilitate wallet setup

// import { BASE_BSC_SCAN_URL, BASE_URL } from '../config/index'
// import { nodes } from './getRpcUrl'

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
import {ChainId} from '../constants'

export const setupNetwork = async () => {
  const provider = window.ethereum
  console.log('setupNetwork####ChainId.MAINNET####', ChainId.MAINNET)
  if (provider) {
    const chainId = parseInt(String(ChainId.MAINNET), 10)
    // const chainId = parseInt('97', 10)
    // const chainId = parseInt('4', 10)

    // try {
    //   await provider.request({
    //     method: 'wallet_addEthereumChain',
    //     params: [
    //       {
    //         chainId: `0x${chainId.toString(16)}`,
    //         chainName: 'Ethereum Mainnet',
    //         nativeCurrency: {
    //           name: 'ETH',
    //           symbol: 'eth',
    //           decimals: 18,
    //         },
    //         rpcUrls: ['https://mainnet.infura.io/v3/e076c591970f48869749c708c5b939e5'],
    //         blockExplorerUrls: ['https://etherscan.io'],
    //       },
    //       // {
    //       //   chainId: `0x${chainId.toString(16)}`,
    //       //   chainName: 'Rinkeby Test Network',
    //       //   nativeCurrency: {
    //       //     name: 'ETH',
    //       //     symbol: 'eth',
    //       //     decimals: 18,
    //       //   },
    //       //   rpcUrls: ['https://rinkeby.infura.io/v3/e076c591970f48869749c708c5b939e5'],
    //       //   // rpcUrls: ['https://rinkeby.infura.io'],
    //       //   blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    //       // },
    //       // {
    //       //   chainId: `0x${chainId.toString(16)}`,
    //       //   chainName: 'BSC Test Network',
    //       //   nativeCurrency: {
    //       //     name: 'ETH',
    //       //     symbol: 'eth',
    //       //     decimals: 18,
    //       //   },
    //       //   rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    //       //   blockExplorerUrls: ['https://testnet.bscscan.com'],
    //       // },
    //     ],
    //   })
    //   return true
    // } catch (error) {
    //   try {
    //     await provider.request({
    //       method: 'wallet_switchEthereumChain',
    //       params: [
    //         {
    //           chainId: '0x1',
    //         },
    //       ],
    //     })
    //     return true
    //   } catch (error2) {
    //     console.error('2222Failed to setup the network in Metamask:', error2)
    //     return false
    //   }

    //   // return false
    // }

    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
          },
        ],
      })
      return true
    } catch (error) {
      try {
        let currentParamsItem: any
        if (chainId === 1) {
          currentParamsItem = {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Ethereum Mainnet',
            nativeCurrency: {
              name: 'ETH',
              symbol: 'eth',
              decimals: 18,
            },
            rpcUrls: ['https://mainnet.infura.io/v3/e076c591970f48869749c708c5b939e5'],
            blockExplorerUrls: ['https://etherscan.io'],
          }
        } else {
          currentParamsItem = {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Rinkeby Test Network',
            nativeCurrency: {
              name: 'ETH',
              symbol: 'eth',
              decimals: 18,
            },
            rpcUrls: ['https://rinkeby.infura.io/v3/e076c591970f48869749c708c5b939e5'],
            // rpcUrls: ['https://rinkeby.infura.io'],
            blockExplorerUrls: ['https://rinkeby.etherscan.io'],
          }
        }
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            currentParamsItem,
            // {
            //   chainId: `0x${chainId.toString(16)}`,
            //   chainName: 'Ethereum Mainnet',
            //   nativeCurrency: {
            //     name: 'ETH',
            //     symbol: 'eth',
            //     decimals: 18,
            //   },
            //   rpcUrls: ['https://mainnet.infura.io/v3/e076c591970f48869749c708c5b939e5'],
            //   blockExplorerUrls: ['https://etherscan.io'],
            // },
            // {
            //   chainId: `0x${chainId.toString(16)}`,
            //   chainName: 'Rinkeby Test Network',
            //   nativeCurrency: {
            //     name: 'ETH',
            //     symbol: 'eth',
            //     decimals: 18,
            //   },
            //   rpcUrls: ['https://rinkeby.infura.io/v3/e076c591970f48869749c708c5b939e5'],
            //   // rpcUrls: ['https://rinkeby.infura.io'],
            //   blockExplorerUrls: ['https://rinkeby.etherscan.io'],
            // },
            // {
            //   chainId: `0x${chainId.toString(16)}`,
            //   chainName: 'BSC Test Network',
            //   nativeCurrency: {
            //     name: 'ETH',
            //     symbol: 'eth',
            //     decimals: 18,
            //   },
            //   rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
            //   blockExplorerUrls: ['https://testnet.bscscan.com'],
            // },
          ],
        })
        return true
      } catch (error2) {
        console.error('2222Failed to setup the network in Metamask:', error2)
        return false
      }
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
  const provider = window.ethereum
  let tokenAdded
  if (provider) {
    tokenAdded = await provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: `https://www.cdztest.site/images/coins/${tokenAddress}.png`,
        },
      },
    })
  }

  return tokenAdded
}
