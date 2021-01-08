const state = {
  loading: false
}

const mutations = {
  TOGGLE_LOADING: (state, loading) => {
    state.loading = loading
  }
}

const actions = {
  toggleLoading({ commit }) {
    commit('TOGGLE_LOADING',)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
