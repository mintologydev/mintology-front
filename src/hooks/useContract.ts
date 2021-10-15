/** @format */

import {useMemo} from 'react'
import {useActiveWeb3React} from 'hooks'
import {getDistributionContract, getNftContract} from 'utils/contraceHelpers'

export const useDistribution = () => {
  const {library} = useActiveWeb3React()
  return useMemo(() => getDistributionContract(library?.getSigner()), [library])
}

export const useNFTContract = () => {
  const {library} = useActiveWeb3React()
  return useMemo(() => getNftContract(library?.getSigner()), [library])
}
