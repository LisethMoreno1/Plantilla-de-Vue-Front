<template>
    <div>
      <h1>Hola</h1>
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
    </div>
  </template>
  
  <script>
  import UserService from '@/application/services/UserService';
  
  export default {
    data() {
      return {
        user: {
          name : "Liseth",
          email : "Moreno"
        }
      };
    },
    async created() {
      const userService = new UserService();
      this.user = await userService.fetchUser(this.$route.params.id);
    }
  };
  </script>
  