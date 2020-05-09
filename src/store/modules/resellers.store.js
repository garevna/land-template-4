/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  cards: null
}

const getters = {
  endpoint: (state, getters, rootState) => `${rootState.host}/api/frontend/resellers`
}

const mutations = {
  RESELLERS: (state, content) => {
    state.cards = JSON.parse(JSON.stringify(content))
  }
}

const actions = {

  async GET_RESELLERS ({ state, getters, commit }) {
    const response = await (await fetch(`${getters.endpoint}`)).json()
    const cards = response.data.map(
      item => ({
        phone: item.phone_number,
        website: item.site,
        imgLink: item.logo,
        id: item.id
      })
    )
    commit('RESELLERS', cards.sort((a, b) => a.id - b.id))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
