export const state = () => ({
  bankId: null,
  branchId: null,
  accountId: null,
  amount: null,
});

export const getters = {
  bankId: state => state.bankId,
  branchId: state => state.branchId,
  accountId: state => state.accountId,
  amount: state => state.amount,
}

export const mutations = {
  bankId: (state, bankId) => state.bankId = bankId,
  branchId: (state, branchId) => state.branchId = branchId,
  accountId: (state, accountId) => state.accountId = accountId,
  amount: (state, amount) => state.amount = amount,
}
