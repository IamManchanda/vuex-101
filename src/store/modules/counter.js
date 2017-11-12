/**
 * Vue and Vuex
 */

const state = { // Default State
  counter: 0,
}

const getters = { // Used to retrieve the current result
  getCounter: state => state.counter,
}

const mutations = { // Also known as setters to getters ;)
  updateIncrement(state, payload) {
    state.counter += payload
  },
  updateDecrement(state, payload) {
    state.counter -= payload
  },
}

const actions = { // Actions are especially for Async but should be used with Sync too
  // Sync
  syncUpdateIncrement({ commit }, payload) {
    commit('updateIncrement', payload);
  },
  syncUpdateDecrement({ commit }, payload) {
    commit('updateDecrement', payload);
  },

  // Async
  asyncUpdateIncrement({ commit }, payload) {
    setTimeout(() => {
      commit('updateIncrement', payload.by);
    }, payload.duration);
  },
  asyncUpdateDecrement({ commit }, payload) {
    setTimeout(() => {
      commit('updateDecrement', payload.by);
    }, payload.duration);
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
