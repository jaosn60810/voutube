const state = {
  showDrawer: true,
  showMiniDrawer: true,
  videoIsPlaying: false,
}

const getters = {}

const actions = {}

const mutations = {
  toggleShowMiniDrawer: (state, val) => (state.showMiniDrawer = val),
  toggleShowDrawer: (state, val) => (state.showDrawer = val),
  toggleVideoIsPlaying: (state, val) => (state.videoIsPlaying = val),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
