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
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      localStorage.setItem('sidebarStatus', 1)
    } else {
      localStorage.setItem('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    localStorage.setItem('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  CHANGE_LOADING: (state, loading) => {
    state.loading = loading
  },
  TOGGLE_MENU_TYPE: (state, menuType) => {
    state.menuType = menuType
  },
  SET_COUNT_DOWN: (state, time) => {
    state.countDown = time
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  changeLoading({ commit }, loading) {
    commit('CHANGE_LOADING', loading)
  },
  toggleMenuType({ commit }, menuType) {
    commit('TOGGLE_MENU_TYPE', menuType)
  },
  setCountDown({ commit }, countDown) {
    let timer = null
    timer = setInterval(() => {
      --countDown
      if (countDown === 0) {
        countDown = 60
        clearInterval(timer)
      }
      commit('SET_COUNT_DOWN', countDown)
    }, 1000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
