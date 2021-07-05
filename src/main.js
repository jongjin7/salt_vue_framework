import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import EventBus from "./utils/eventbus";

import Fragment from "vue-fragment";
Vue.use(Fragment.Plugin);
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

Vue.prototype.$eventBus = EventBus;

import "expose-loader?$!expose-loader?jQuery!jquery";
// calendar
// import VCalendar from "v-calendar";
// Vue.use(VCalendar);

import DateRangePicker from "vue2-daterange-picker";
// you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
Vue.component("date-range-picker", DateRangePicker);

// validator
import { ValidationProvider, extend } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);

// Vue.use(VueLoading);
// Vue.use(VueToast);

// custom Components
import "@/components/common/partials/partialElements";
import "@/components/common/forms/formComponents";

Vue.config.productionTip = false;

// style
import "vue-multiselect/dist/vue-multiselect.min.css";
import "@/assets/scss/saltlux_common.scss";
import "@/assets/scss/site_contents.scss";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
