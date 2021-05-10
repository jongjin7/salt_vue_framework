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

import { sSvgIcon, sButton, sBadge } from "@/components/common/partials/partialElements";
Vue.component("s-button", sButton);
Vue.component("s-badge", sBadge);
Vue.component("s-svg-icon", sSvgIcon);

import { formGroup, formInputField } from "@/components/common/forms/formComponents";
Vue.component("form-group", formGroup);
Vue.component("input-field", formInputField);

Vue.config.productionTip = false;

import "@/assets/scss/saltlux_common.scss";
import "@/assets/scss/site_contents.scss";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
