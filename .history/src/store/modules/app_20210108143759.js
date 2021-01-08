const state = {
  sidebar: {
    opened: localStorage.getItem('sidebarStatus')
      ? !!+localStorage.getItem('sidebarStatus')
      : true,
    withoutAnimation: false
  },
  device: 'desktop',
  loading: false,
  menuType: 'volunteer',
  countDown: 60 // 登录获取验证码倒计时
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
