import { createRouter, createWebHistory } from 'vue-router';
import UserProfile from '../components/UserProfile.vue'
const routes = [
  {
    path: '/',
    name: 'UserProfile',
    component: UserProfile
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
