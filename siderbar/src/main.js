import Vue from "vue";
import './plugins/axios'
import './plugins/bootstrap-vue'
import router from "./router";
import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h('router-view')
}).$mount("#app");
