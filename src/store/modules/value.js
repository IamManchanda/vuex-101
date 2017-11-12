/**
 * Vue and Vuex
 */

const state = { // Default State
  value: 0,
}

const getters = { // Used to retrieve the current result
  getValue: state => state.value,
}

const mutations = { // Also known as setters to getters ;)
  updateValue(state, payload) {
    state.value = payload
  },
}

const actions = { // Actions are especially for Async but should be used with Sync too
  syncUpdateValue({ commit }, payload) {
    commit('updateValue', payload);
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
