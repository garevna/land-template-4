/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  news: null,
  content: null
}

const getters = {
  contentEndpoint: (state, getters, rootState) => `${rootState.host}/api/frontend/posts`,
  defaultPicture: (state, getters, rootState) => `${rootState.host}/storage/posts/1.jpg`,
  defaultAvatar: (state, getters, rootState) => `${rootState.host}/storage/posts/users/1.png`,
  newsEndpoint: (state, getters, rootState) => `${rootState.host}/api/frontend/news`
}

const mutations = {
  BLOG_NEWS: (state, payload) => { state.news = payload },
  BLOG_CONTENT: (state, content) => { state.content = JSON.parse(JSON.stringify(content)) }
}

const actions = {
  async GET_BLOG_NEWS ({ state, getters, commit }) {
    const response = (await (await fetch(`${getters.newsEndpoint}`)).json()).data
    commit('BLOG_NEWS', response)
    return state.news
  },

  async GET_BLOG_CONTENT ({
    state, getters, commit, dispatch
  }) {
    const response = await (await fetch(getters.contentEndpoint)).json()
    const content = response.data.map(
      post => ({
        date: post.published_at,
        previewTitle: post.title,
        // author: post.author,
        imageSrc: post.logo || getters.defaultPicture,
        avatar: post.logo_user || this.defaultAvatar,
        text: post.text,
        id: post.id
      })
    )
    commit('BLOG_CONTENT', content.reverse())
    return state.content
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
