
export const checkWhiteList = async (contract: any, account: string) => {
  // const isChecked = await contract.checkWhiteList(account)
  const isChecked = await contract.isWhitelisted(account)
  return isChecked
}

export const registerWhiteList = async (contract: any) => {
  console.log('进来了吗####')
  const tx = await contract.registerWhiteList()
  console.log('tx#####', tx)
  const receipt = await tx.wait()
  return receipt.status
}

export const buyOne = async (contract: any, account: string) => {
  const tx = await contract.buyOne(account)
  const receipt = await tx.wait()
  return receipt.status
}
