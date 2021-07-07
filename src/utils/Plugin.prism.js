import Prism from "@/assets/vendors/prism/prism.js";

const VuePrism = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        Prism.highlightAll();
      },
    });
  },
};

export default VuePrism;
