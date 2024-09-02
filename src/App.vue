<template>

  <UserListView />
  <UserDetailView />
</template>

<script>
import UserListView from './presentation/views/UserListView.vue'
import UserDetailView from './presentation/views/UserDetailView.vue'

export default {
  name: 'App',
  components: {
    UserListView,
    UserDetailView
  }
}
</script>

<style></style>
