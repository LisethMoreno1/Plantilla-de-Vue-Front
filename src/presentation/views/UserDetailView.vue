<template>
  <div>
    <h1>User Detail</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="user">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <router-link to="/">Back to User List</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserDetailView',
  computed: {
    ...mapGetters(['user', 'isLoading', 'error']),
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
  created() {
    const userId = this.$route.params.id;
    this.fetchUser(userId);
  },
};
</script>
