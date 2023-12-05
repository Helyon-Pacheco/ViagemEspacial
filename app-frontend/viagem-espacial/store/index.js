import Vuex from 'vuex';
import destinos from './destinos';

const createStore = () => {
  return new Vuex.Store({
    // Configurações globais do Vuex
    state: {},
    mutations: {},
    actions: {},
    modules: {
      destinos
    }
  });
};

export default createStore;
