const state = {
  loading: true,
  loadingText: ''
}

const mutations = {
  TOGGLE_LOADING: (state, data) => {
    state.loading = data.loading
    state.loadingText = data.loadingText || ''
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
