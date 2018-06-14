import { getSubaccounts } from '../requests/get'

const getDeptIdsInAccount = async accountId => {
  const accounts = await getSubaccounts(accountId)
  const deptIds = accounts.map(({ id, name }) => ({ id, name }))
  return deptIds
}

export default getDeptIdsInAccount
