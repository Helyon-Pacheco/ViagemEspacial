export const state = () => ({
  destinos: [],
  loading: false,
  error: null
});

export const mutations = {
  SET_DESTINOS(state, destinos) {
    state.destinos = destinos;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  async fetchDestinos({ commit }) {
    commit('SET_LOADING', true);
    commit('SET_ERROR', null);
    try {
      const response = await this.$axios.get('/api/destinos');
      commit('SET_DESTINOS', response.data);
      commit('SET_LOADING', false);
    } catch (error) {
      commit('SET_ERROR', error);
      commit('SET_LOADING', false);
    }
  }
};
