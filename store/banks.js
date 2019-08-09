import { firebaseListener, firebaseModify, firebaseAdd } from '../plugins/firebase';

export const state = () => ({
  values: [],
});

export const mutations = {
  modify: firebaseModify,
  add: firebaseAdd,
}

export const actions = {
  listen: firebaseListener('banks'),
};
