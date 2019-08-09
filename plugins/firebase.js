import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDLIbhYxnQgFYEVELcec20pbN78umBG9dg',
    authDomain: 'moneta-f39eb.firebaseapp.com',
    databaseURL: 'https://moneta-f39eb.firebaseio.com',
    projectId: 'moneta-f39eb',
    storageBucket: 'moneta-f39eb.appspot.com',
    messagingSenderId: '450912157988',
  });
}

export const db = firebase.firestore();

export function firebaseAdd(state, { id, data}) {
  state.values.push({ id, ...data });
}

export function firebaseModify(state, { id , data }) {
  const index = state.values.findIndex((b) => b.id === id);
  Vue.set(state.values, index, { ...data });
}

export function firebaseListener(name) {
  return ({ commit }) => db.collection(name).onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const id = change.doc.id;
      const data = change.doc.data();
      if (change.type === 'added') {
        commit('add', { id, data });
      } else if (change.type === 'modified') {
        commit('modify', { id, data });
      }
    });
  });
};
