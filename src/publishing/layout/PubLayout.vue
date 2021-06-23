<template>
 <comp-frame class="s-guide">
   <template #page-header>
     <guide-toc :tocData="guideTocData"></guide-toc>
   </template>
 </comp-frame>
</template>
<script>
import "../pub-only/mixinTocLink.js";
import CompFrame from "@/components/layout/CompFrame";
import guideToc from "../pub-only/guideToc";
export default {
  name: "publishingLayout",
  components:{
    CompFrame,
    guideToc,
  },
  watch:{
    // $route(to, from) {
    // console.log("watchRouter", to, from, " route:::", this.$route, " title::", to.params);
    // },
  },
  data() {
    return {
      guideTocData: [],
    };
  },
  created() {
    this.$eventBus.$on("setGuideToc", this.setGuideToc);
  },
  methods:{
    setGuideToc(tocData) {
      if(tocData) this.guideTocData = tocData;
      else this.guideTocData = [];
    },
  },
};
</script>
<style src="../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
