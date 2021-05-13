import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import Fragment from "vue-fragment";
Vue.use(Fragment.Plugin);
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

import VeeValidate from "vee-validate";
import language from "vee-validate/dist/locale/ko";
Vue.use(VeeValidate, {
  inject: true,
  locale: "ko",
  dictionary: {
    ko: language,
  },
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors",
});
// Vue.use(VueLoading);
// Vue.use(VueToast);

import { SsvgIcon, Sbutton, Sbadge } from "@/components/common/partials/partialElements";
Vue.component("s-svg-icon", SsvgIcon);
Vue.component("s-button", Sbutton);
Vue.component("s-badge", Sbadge);

Vue.config.productionTip = false;

import "@/assets/scss/saltlux_common.scss";
import "@/assets/scss/site_contents.scss";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
