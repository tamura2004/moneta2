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
  data: state => ({
    ...state,
    kind: '普通',
    num: Math.floor(Math.random() * 1000000),
    password: md5(state.password),
    total: 1000000,
  }),
}

export const mutations = {
  bankId: (state, bankId) => state.bankId = bankId,
  branchId: (state, branchId) => state.branchId = branchId,
  name: (state, name) => state.name = name,
  password: (state, password) => state.password = password,
}
