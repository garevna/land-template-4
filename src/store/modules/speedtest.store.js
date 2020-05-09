/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const state = {
  speedTestData: null,
  downloadProgress: null,
  downloadSpeed: null,
  uploadProgress: null,
  uploadSpeed: null,
  testServer: null,
  speedTestButtonEnabled: true,
  ws: {}
}

const getters = {
  speedTestEndpoint: (state, getters, rootState) => `${rootState.socket}/speedtest`
}

const mutations = {
  SPEED_TEST_RESULTS: (state, data) => {
    state.speedTestData = data ? JSON.parse(JSON.stringify(data)) : data
  },
  DOWNLOAD_PROGRESS: (state, newVal) => {
    state.downloadProgress = newVal
  },
  DOWNLOAD_SPEED: (state, newVal) => {
    state.downloadSpeed = newVal
  },
  UPLOAD_PROGRESS: (state, newVal) => {
    state.uploadProgress = newVal
  },
  UPLOAD_SPEED: (state, newVal) => {
    state.uploadSpeed = newVal
  },
  SPEED_TEST_SERVER: (state, server) => {
    state.testServer = JSON.parse(JSON.stringify(server))
  },
  SPEED_TEST_BUTTON: (state, val) => {
    state.speedTestButtonEnabled = val
  },

  WEBSOCKET_CONNECTION: (state, options) => {
    state.ws = Object.assign(new WebSocket(options.connect), {
      onopen: options.onopen,
      onclose: options.onclose,
      onmessage: options.onmessage,
      onerror: options.onerror
    })
  }
}

const actions = {
  async INIT_WEBSOCKET (context, rootContext) {
    context.dispatch('START_SPEED_TEST')

    function onOpen (event) {
      event.target.send('test')
    }

    const onMessage = (function onMessage (mutate) {
      return function message (event) {
        const data = JSON.parse(event.data)
        if (data.downloadProgress) mutate('DOWNLOAD_PROGRESS', data.downloadProgress)
        if (data.downloadSpeed) mutate('DOWNLOAD_SPEED', data.downloadSpeed)
        if (data.uploadProgress) mutate('UPLOAD_PROGRESS', data.uploadProgress)
        if (data.uploadSpeed) mutate('UPLOAD_SPEED', data.uploadSpeed)
        if (data.testServer) mutate('SPEED_TEST_SERVER', data.testServer)
        if (data.speedTestResult) {
          mutate('SPEED_TEST_RESULTS', data.speedTestResult)
          mutate('SPEED_TEST_BUTTON', true)
        }
      }
    }(context.commit))

    context.commit('WEBSOCKET_CONNECTION', {
      connect: context.getters.speedTestEndpoint,
      onopen: onOpen,
      onclose: null,
      onmessage: onMessage
    })
  },

  START_SPEED_TEST ({ commit }) {
    commit('SPEED_TEST_RESULTS', null)
    commit('DOWNLOAD_PROGRESS', null)
    commit('UPLOAD_PROGRESS', null)
    commit('DOWNLOAD_SPEED', null)
    commit('UPLOAD_SPEED', null)
    commit('SPEED_TEST_BUTTON', false)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
