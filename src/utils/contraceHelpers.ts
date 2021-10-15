/** @format */

import {ethers} from 'ethers'
import distribution from '../../src/constants/abis/distribution.json'
import {DistributionContract, NFTToken} from '../constants/index'
import {simpleRpcProvider} from './providers'
import nftAbi from 'constants/abis/nft_contract.json'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getDistributionContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(distribution, DistributionContract, signer)
}

export const getNftContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(nftAbi, NFTToken, signer)
}
