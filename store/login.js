export const state = () => ({
  id: null,
});

export const getters = {
  id: state => state.id,
  account: (state, getters, rootState, rootGetters) =>
    rootGetters['accounts/accounts']('ALL').find(account => account.id === state.id),
  branch: (state, getters, rootState, rootGetters) =>
    getters.account && rootGetters['branches/branch'](getters.account.branchId),
  bank: (state, getters, rootState, rootGetters) =>
    getters.branch && rootGetters['banks/bank'](getters.branch.bankId),
}

export const mutations = {
  id: (state, id) => state.id = id,
}

export const actions = {
  id: ({ commit }, id) => commit('id', id),
}
