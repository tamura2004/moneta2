import { Firestore } from '~/plugins/firebase.js';

const firestore = new Firestore('banks');
export const state = firestore.state;
export const actions = firestore.actions;
export const mutations = firestore.mutations;
