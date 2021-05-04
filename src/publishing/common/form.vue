<template>
  <section>
    <div class="container">
      <div class="row">
        <h2 id="icons">1. 아이콘</h2>
        <div class="content">
          <h3 id="icon-basic">기본 아이콘</h3>
          ref: https://vue-multiselect.js.org/#sub-single-select
           <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Multiselect from "vue-multiselect";
export default {
  name: "ui-form",
  components:{
    Multiselect,
  },
  data() {
    return{
      value: null,
      options: ["list", "of", "options"],
    };
  },
  created() {
    this.$emit("updateStatus", { test:22333, });
  },
  beforeDestroy() {
    this.$emit("updateStatus", false);
  },
};
</script>