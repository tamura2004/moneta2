export const state = () => ({
  id: null,
  name: null,
  bankName: null,
  branchName: null,
});

export const getters = {
  id: state => state.id,
  name: state => state.name,
  bankName: state => state.bankName,
  branchName: state => state.branchName
}

export const mutations = {
  id: (state, id) => state.id = id,
  name: (state, name) => state.name = name,
  bankName: (state, bankName) => state.bankName = bankName,
  branchName: (state, branchName) => state.branchName = branchName,
}

export const actions = {
  id: ({ commit, rootGetters }, id) => {
    const account = rootGetters['accounts/account'](id);
    const bank = rootGetters['banks/bank'];
    const branch = rootGetters['branches/branch'];
    const name = account ? account.name : '----';
    const bankName = account ? bank(account.bankId).name : '----';
    const branchName = account ? branch(account.branchId).name : '----';
    commit('id', id);
    commit('name', name);
    commit('bankName', bankName);
    commit('branchName', branchName);
  }
}
