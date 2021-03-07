import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/Store";
import axios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
