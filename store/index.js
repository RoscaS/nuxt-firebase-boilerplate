export const state = () => ({
  socialDialog: false,
  addDialog: false,
})

export const mutations = {
  SOCIAL_DIALOG(state, value) {
    state.socialDialog = value;
  },
  ADD_DIALOG(state, value) {
    state.addDialog = value;
  },
}

export const actions = {
  socialDialog({ commit }, payload) {
    commit('SOCIAL_DIALOG', payload)
  },
  addDialog({ commit }, payload) {
    commit('ADD_DIALOG', payload)
  },
}
