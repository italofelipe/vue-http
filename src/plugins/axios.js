import axios from "axios";
import Vue from "vue";

const base_url = (axios.defaults.baseURL =
  "https://vue-backend-v2.firebaseio.com/");
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
    // Criando um Interceptor para "interceptar nossa requisição de nos mostrar alguns dados sobre ela"
    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method);
      /* Dá pra fazer muitas "brincadeiras com Interceptors. Uma delas, é transformar requisições de um determinado tipo em requisições
       * de outro tipo, como por exemplo: */

      /* if (config.method == "post") {
       * Tranformar uma requisição do tipo POST em uma requisição do tipo PUT.
       * config.method = "put";
       * }
       */
      return config;
    });
  }
});
