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

export class Firestore {
  constructor(name) {
    this.name = name;
  }
  get state() {
    return () => ({
      values: [],
      unsubscribe: null,
    });
  }
  get mutations() {
    return {
      add(state, { id, data}) {
        state.values.push({ id, ...data });
      },
      modify(state, { id , data }) {
        const index = state.values.findIndex((value) => value.id === id);
        Vue.set(state.values, index, { ...data });
      },
      setUnsubscribe(state, unsubscribe) {
        state.unsubscribe = unsubscribe;
      }
    };
  }
  get actions() {
    return {
      listen: ({ commit }) => {
        const unsubscribe = db.collection(this.name).onSnapshot((snapshot) => {
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
        commit('setUnsubscribe', unsubscribe);
      },
    };
  }
}
