import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Router from './router'
import "./theme/index"

createApp(App)
  .use(Router)
  .use(createPinia())
  .mount('#app')

