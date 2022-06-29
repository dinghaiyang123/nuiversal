import UserApi from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await UserApi.login(payload)
        commit('setToken', response.token)
        return response
      } catch (err) {}
      console.log(err);
    }
  }
}
