<template>
 <comp-frame>
   <template #page-header>
    <!-- 헤더에 추가되는 컨텐츠 -->
   </template>
 </comp-frame>
</template>
<script>
import "../pub-only/mixinTocLink.js";
import CompFrame from "@/components/layout/CompFrame";
import guideToc from "../pub-only/guideToc";
export default {
  name: "BasicLayout",
  components:{
    CompFrame,
  },
  watch:{

  },
  data() {
    return {

    };
  },
  created() {

  },
  methods:{

  },
};
</script>
<style src="../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
