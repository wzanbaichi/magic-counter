const state = {
  loading: false
}

const mutations = {
  TOGGLE_LOADING: (state, device) => {
    state.loading = loading
  }
}

const actions = {
  toggleLoading({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
