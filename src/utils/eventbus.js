import Vue from "vue";
const EventBus = new Vue({
  methods: {
    guideTitleToc(param) {
      this.$emit("setGuideToc", param.tocData);
      this.pageHeaderTitle(param.pageTitle);
    },
    pageHeaderTitle(param) {
      this.$emit("setTitle", param);
    },
  },
});
export default EventBus;
