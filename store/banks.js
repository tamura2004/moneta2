import { Firestore } from '~/plugins/firebase.js';

const firestore = new Firestore('banks');
export const state = firestore.state;
export const actions = firestore.actions;
export const mutations = firestore.mutations;
export const getters = {
    banks: state => state.values,
    getBank: state => id =>
        state.values.find(bank => bank.id === id),
};
