// import { createApp } from "vue";
// import App from "./App.vue";

// createApp(App).mount("#app");

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')