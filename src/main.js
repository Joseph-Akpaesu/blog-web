// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// import * as bootstrap from "bootstrap/dist/js/bootstrap.js"

// import { DatePicker } from 'ant-design-vue';
import {HTTP} from './axios';//for microservices
// import {myMixin} from './mixins'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;
// Vue.use(VueMaterial)

// Vue.use(DatePicker);
Vue.prototype.$http = HTTP // for microservices
// Vue.mixin(theMixin)


Vue.filter("to-uppercase", value => {
  return value.toUpperCase();
});

Vue.filter("snippet", value => {
  return value.slice(0, 100) + '...';
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
// bootstrap,
  router,
  components: { App },
  template: "<App/>"
});
