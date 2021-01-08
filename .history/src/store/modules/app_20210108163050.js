const state = {
  loading: false,
  loadingText: '正在处理中了...',
  fileFigureOut: false
}

const mutations = {
  TOGGLE_LOADING: (state, data) => {
    state.loading = data.loading
    state.loadingText = data.loadingText || '正在处理中了...'
  },
  TOGGLE_FILE_STATUS: (state, fileStatus) => {
    state.fileFigureOut = fileStatus
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
