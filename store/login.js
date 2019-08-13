export const state = () => ({
  id: null,
});

export const getters = {
  id: state => state.id,
  account: (state, getters, rootState, rootGetters) =>
    rootGetters['accounts/accounts']('ALL').find(account => account.id === state.id),
  branch: (state, getters, rootState, rootGetters) =>
    rootGetters['branches/branches']('ALL').find(
      branch =>
        getters.account &&
        getters.account.branchId === branch.id,
    ),
  bank: (state, getters, rootState, rootGetters) =>
    rootGetters['banks/banks'].find(
      bank =>
        getters.branch &&
        getters.branch.bankId === bank.id,
    ),
  statements: (state, getters, rootState, rootGetters) =>
    rootGetters['statements/statements'](getters.id),
}

export const mutations = {
  id: (state, id) => state.id = id,
}

export const actions = {
  id: ({ commit }, id) => commit('id', id),
}
