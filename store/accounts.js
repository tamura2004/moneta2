import { Firestore } from '~/plugins/firebase.js';

const firestore = new Firestore('accounts');
export const state = firestore.state;
export const actions = firestore.actions;
export const mutations = firestore.mutations;
export const getters = {
  accounts: state => branchId =>
    state.values.filter(account => branchId === 'ALL' || account.branchId === branchId),
  account: state => id =>
    state.values.find(account => account.id === id),
  name: (_, getters) => id =>
    getters.account(id) ? getters.account(id).name : '-',
};
