/** @format */

import {useCallback} from 'react'
import {ethers, Contract} from 'ethers'

const useApprove = (contract: Contract, address: string) => {
  const handleApprove = useCallback(async () => {
    try {
      const tx = await contract.approve(address, ethers.constants.MaxUint256)
      const receipt = await tx.wait()
      return receipt.status
    } catch (e) {
      return false
    }
  }, [contract])

  return {onApprove: handleApprove}
}

export default useApprove
