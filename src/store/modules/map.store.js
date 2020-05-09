/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  points: null,
  polygons: null,
  ServiceAvailable: null,
  BuildCommenced: null
}

const getters = {
  pointsEndpoint: (state, getters, rootState, rootGetters) => `${rootState.host}/api/frontend/markers`,
  polygonsEndpoint: (state, getters, rootState, rootGetters) => `${rootState.host}/api/frontend/polygons`
}

const mutations = {
  SET_POLYGONS: (state, polygons) => { state[polygons.type] = polygons.content }
}

/* eslint-disable no-restricted-syntax */

const actions = {

  async GET_POLYGONS ({ getters, commit }) {
    const response = await (await fetch(getters.polygonsEndpoint)).json()
    for (const type of ['ServiceAvailable', 'BuildCommenced']) {
      const color = type === 'ServiceAvailable' ? '#A00E0D' : '#000000'
      const polygons = []
      const areas = response.features
        .filter(feature => feature.properties.typeOf === type)
        .map(feature => feature.geometry.coordinates)
      for (const area of areas) {
        const [points] = area
        const coords = points.map(point => ({ lat: point[1], lng: point[0] }))
        const polygon = new window.google.maps.Polygon({
          paths: coords,
          fillColor: color,
          strokeColor: color,
          strokeWeight: 0.5,
          clickable: false
        })
        polygons.push(polygon)
      }
      commit('SET_POLYGONS', { type, content: polygons })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
