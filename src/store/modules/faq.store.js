/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  content: null
}

const getters = {
  endpoint: (state, getters, rootState) => rootState.faqEndpoint
}

const mutations = {
  FAQ_CONTENT: (state, content) => {
    state.content = content.data.sort((a, b) => a.priority - b.priority)
  }
}

const actions = {

  async GET_FAQ_GONTENT ({ state, getters, commit }) {
    commit('FAQ_CONTENT', await (await fetch(`${getters.endpoint}`)).json())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
