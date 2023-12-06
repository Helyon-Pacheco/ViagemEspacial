import Vue from 'vue';
import Vuex from 'vuex';
import destinos from './destinos';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    modules: {
      destinos
    },
    state: () => ({
      authenticated: false
    }),
    mutations: {
      setAuthenticated(state, value) {
        state.authenticated = value;
      },
      logout(state) {
        state.authenticated = false;
      }
    }
  });
};

export default createStore;
