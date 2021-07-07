<template>
 <comp-frame>
   <!-- 헤더에 추가되는 컨텐츠가 존재하는 경우 -->
   <template #page-header></template>

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
