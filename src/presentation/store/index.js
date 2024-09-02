import { createStore } from 'vuex';
import UserService from '@/application/services/UserService';

const store = createStore({
  state() {
    return {
      users: [],
      user: null,
      loading: false,
      error: null,
    };
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      commit('SET_LOADING', true);
      try {
        const userService = new UserService();
        const users = await userService.fetchAllUsers();
        commit('SET_USERS', users);
      } catch (error) {
        commit('SET_ERROR', error.message);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async fetchUser({ commit }, userId) {
      commit('SET_LOADING', true);
      try {
        const userService = new UserService();
        const user = await userService.fetchUser(userId);
        commit('SET_USER', user);
      } catch (error) {
        commit('SET_ERROR', error.message);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
  getters: {
    users: (state) => state.users,
    user: (state) => state.user,
    isLoading: (state) => state.loading,
    error: (state) => state.error,
  },
});

export default store;
