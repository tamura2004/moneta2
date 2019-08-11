export const state = () => ({
  id: null,
  account: null,
});

export const getters = {
  id: state => state.id,
  account: state => state.account,
}

export const mutations = {
  id: (state, id) => state.id = id,
  account: (state, account) => state.account = account,
}

export const actions = {
  id: ({ commit, rootGetters }, id) => {
    const account = rootGetters['accounts/account'](id);
    commit('id', id);
    commit('account', account);
  }
}
