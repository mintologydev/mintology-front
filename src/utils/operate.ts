
export const checkWhiteList = async (contract: any, account: string) => {
  const isChecked = await contract.checkWhiteList(account)
  return isChecked
}

export const registerWhiteList = async (contract: any) => {
  const tx = await contract.registerWhiteList()
  const receipt = await tx.wait()
  return receipt.status
}

export const buyOne = async (contract: any, account: string) => {
  const tx = await contract.buyOne(account)
  const receipt = await tx.wait()
  return receipt.status
}
