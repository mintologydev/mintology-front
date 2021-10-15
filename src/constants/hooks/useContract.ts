/** @format */

import {useMemo} from 'react'
import {useActiveWeb3React} from 'hooks'
import {getDistributionContract} from 'utils/contraceHelpers'

export const useDistribution = () => {
  const {library} = useActiveWeb3React()
  return useMemo(() => getDistributionContract(library?.getSigner()), [library])
}
