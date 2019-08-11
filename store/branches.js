import { Firestore } from '~/plugins/firebase.js';

const firestore = new Firestore('branches');

export const state = firestore.state;
export const actions = firestore.actions;
export const mutations = firestore.mutations;
export const getters = {
  branches: state => bankId =>
    state.values.filter(branch => branch.bankId === bankId),
};
