import md5 from 'blueimp-md5';

export const state = () => ({
  bankId: null,
  branchId: null,
  name: null,
  password: null,  
});

export const getters = {
  bankId: state => state.bankId,
  branchId: state => state.branchId,
  name: state => state.name,
  password: state => state.password,
  branch: (state, getters, rootState, rootGetters) =>
    rootGetters['branches/branch'](getters.branchId),
  num: (state, getters) => getters.branch ? getters.branch.num : 0,
  account: (state, getters) => ({
    data: {
      ...state,
      kind: '普通',
      num: getters.num + 1,
      password: md5(state.password),
      total: 100000,
    },
  }),
  inc: (state, getters) => ({
    id: getters.branchId,
    data: {
      num: getters.num + 1,
    },
  }),
  statement: (state, getters) => accountId => ({
    data: {
      accountId,
      kind: '普通',
      amount: 100000,
      memo: '口座開設',
      total: 100000,
    },
  }),
}

export const mutations = {
  bankId: (state, bankId) => state.bankId = bankId,
  branchId: (state, branchId) => state.branchId = branchId,
  name: (state, name) => state.name = name,
  password: (state, password) => state.password = password,
}
