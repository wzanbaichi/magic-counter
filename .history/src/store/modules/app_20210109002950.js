const state = {
  loading: false,
  loadingText: '正在处理中了...',
  fileFigureOut: false,
  monthDetailData: {},
  counterParams: {}
}

const mutations = {
  TOGGLE_LOADING: (state, data) => {
    state.loading = data.loading
    state.loadingText = data.loadingText || '正在处理中了...'
  },
  TOGGLE_FILE_STATUS: (state, fileStatus) => {
    state.fileFigureOut = fileStatus
  },
  SET_MONTH_DETAIL_DATA: (state, data) => {
    state.monthDetailData = data
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
