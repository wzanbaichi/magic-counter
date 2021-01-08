const state = {
  loading: true,
  loadingText: ''
}

const mutations = {
  TOGGLE_LOADING: (state, data) => {
    state.loading = data.loading
  }
}

const actions = {
  // toggleLoading({ commit }, loading) {
  //   commit('TOGGLE_LOADING', loading)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
