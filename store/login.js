export const state = () => ({
  id: null,
});

export const getters = {
  id: state => state.id,
  account: state => accounts => accounts.find(account => account.id === state.id),
}

export const mutations = {
  id: (state, id) => state.id = id,
}

export const actions = {
  id: ({ commit }, id) => commit('id', id),
}
