import { userApi } from '@/services/api'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || 'null'),
    menuList: [], // 权限菜单
    resourceList: [] // 权限资源
  },
  getters: {},
  mutations: {
    // 修改容器数据必须使用 mutation 函数
    setUser (state, payload) {
      state.user = JSON.parse(payload)

      // 为了防止页面刷新数据丢失，我们需要把 user 数据持久化
      // 注意：本地存储只能存字符串
      window.localStorage.setItem('user', payload)
    },
    SET_MENU_LIST (state, payload) {
      state.menuList = payload
    },

    SET_RESOURCE_LIST (state, payload) {
      state.resourceList = payload
    }
  },
  actions: {
    async getUserPermissons ({ commit }) {
      const { content } = await userApi.getUserPermissions()
      commit('SET_MENU_LIST', content?.menuList ?? [])
      commit('SET_RESOURCE_LIST', content?.resourceList ?? [])
      return content
    }
  },
  modules: {}
})
