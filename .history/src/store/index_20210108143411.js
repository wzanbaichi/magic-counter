import Vue from 'vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    baseData,
    upload
  },
  getters,
  plugins: [createPersistedState({
    reducer(state) {
      return {
        app: {
          countDown: state.app.countDown
        },
        // 持久化储存state中的user以及项目详情
        user: state.user,
        baseData: {
          activityData: state.baseData.activityData,
          collectBatchOptions: state.baseData.collectBatchOptions,
          operaBehaviorData: state.baseData.operaBehaviorData
        },
        // baseData: state.baseData,
        upload: {
          uuids: state.upload.uuids
        }
      }
    }
  })]
})

export default store