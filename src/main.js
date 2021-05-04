import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import Fragment from "vue-fragment";
Vue.use(Fragment.Plugin);

import { sSvgIcon, sButton, sBadge } from "@/components/common/partials/partialElements";
Vue.component("s-button", sButton);
Vue.component("s-badge", sBadge);
Vue.component("s-svg-icon", sSvgIcon);
Vue.config.productionTip = false;

import "@/assets/scss/saltlux_common.scss";
import "@/assets/scss/site_contents.scss";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
