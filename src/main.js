import Vue from "vue";
import App from "./App.vue";

Vue.config.ignoredElements = [/^ion-/];
Vue.config.productionTip = false;
import "./sass/main.scss";

import router from "./routes/routes";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
