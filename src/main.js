import { createApp } from 'vue'
import App from './App.vue'
import router from './presentation/router/index';
import store from './presentation/store';



createApp(App)
    .use(store)
    .use(router)
    .mount('#app');