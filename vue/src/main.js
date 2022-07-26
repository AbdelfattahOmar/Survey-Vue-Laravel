import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
