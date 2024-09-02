<template>
  <div>
    <h1>User List</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'UserDetail', params: { id: user.id } }">
          {{ user.name }}
        </router-link>
      </li>
    </ul>
    <div v-if="!users.length && !isLoading">
      No users available.
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserListView',
  computed: {
    ...mapGetters(['users', 'isLoading', 'error']),
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
  created() {
    this.fetchUsers();
  },
};
</script>
