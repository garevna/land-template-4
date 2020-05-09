export default {
  namespaced: true,
  state: {
    testimonials: null
  },
  getters: {
    testimonials: state => state.testimonials
  },
  mutations: {
    /* eslint-disable-next-line no-return-assign */
    SET_TESTIMONIALS: (state, payload) => state.testimonials = payload
  },
  actions: {
    // async GET_TESTIMONIALS ({ rootState, commit }, { page = 1, perPage = 4 }) {
    async GET_TESTIMONIALS ({ state, rootState, commit }) {
      // const response = await (await fetch(`${rootState.host}/api/frontend/testimonials?page=${page}&per_page=${perPage}`)).json()
      const response = await (await fetch(`${rootState.host}/api/frontend/testimonials`)).json()
      // console.log(response.data)
      commit('SET_TESTIMONIALS', response.data)
      console.log(state.testimonials)
    }
  }
}
