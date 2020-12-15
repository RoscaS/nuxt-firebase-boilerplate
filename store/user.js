export const state = () => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  provider: null,
});

export const getters = {};

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload || null;
    state.isAuthenticated = !!payload;
  },
  SET_LOADING(state, value) {
    state.loading = value;
  },
  SET_PROVIDER(state, payload) {
    state.provider = payload;
  },
};

export const actions = {
  async onAuthStateChangedAction({ commit }, { authUser, claims }) {
    try {
      if (authUser) {
        const { uid, email, emailVerified, photoURL, displayName } = authUser;
        commit('SET_USER', {
          uid,
          email,
          emailVerified,
          displayName,
          photoURL,
        });
        commit('SET_PROVIDER', authUser.providerData[0].providerId);
      } else {
        commit('SET_USER', null);
        commit('SET_PROVIDER', null);
        claims = null;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async login({ commit }, payload) {
    commit('SET_LOADING', true);
    try {
      const provider =
        payload === 'fb'
          ? new this.$fireModule.auth.FacebookAuthProvider()
          : new this.$fireModule.auth.GoogleAuthProvider();
      await this.$fire.auth.signInWithPopup(provider);
    } catch (e) {
      console.log(e);
    } finally {
      commit('SET_LOADING', false);
    }
  },

  async logout({ commit }) {
    commit('SET_LOADING', true);
    try {
      await this.$fire.auth.signOut();
    } catch (e) {
      console.log(e);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};
