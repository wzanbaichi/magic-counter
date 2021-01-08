const state = {
  loading: true,
  loading
}

const mutations = {
  TOGGLE_LOADING: (state, loading) => {
    state.loading = loading
  }
}

const actions = {
  toggleLoading({ commit }, loading) {
    commit('TOGGLE_LOADING', loading)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
