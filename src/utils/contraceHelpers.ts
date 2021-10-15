/** @format */

import {ethers} from 'ethers'
import distribution from '../../src/constants/abis/distribution.json'
import {DistributionContract} from '../constants/index'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getDistributionContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(distribution, DistributionContract, signer)
}
