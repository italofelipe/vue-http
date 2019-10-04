import axios from "axios";
import Vue from "vue";

const base_url = (axios.defaults.baseURL =
  "https://vue-backend-v2.firebaseio.com/");
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  }
});
