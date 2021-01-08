const state = {
  loading: false,
  loadingText: '正在处理中了...',
  fileFighure
}

const mutations = {
  TOGGLE_LOADING: (state, data) => {
    state.loading = data.loading
    state.loadingText = data.loadingText || '正在处理中了...'
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
