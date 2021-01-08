const state = {
  loading: true,
  loadingText: '正在处理中了...'
}

const mutations = {
  TOGGLE_LOADING: (state, data) => {
    state.loading = data.loading
    state.loadingText = data.loadingText || '正在处理中了...s'
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
