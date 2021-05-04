<template>
  <div class="wrapper s-guide">
    <!-- 레이아웃 시작 -->
    <header class="side-container">
      <nav>
        <ul>
          <li><router-link :to="{name:'main'}">메인으로</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="main-container">
      <div class="page-header">
        <div class="container">
          <div class="row">
            <h1>기본 엘리먼트 모음</h1>
            <guide-toc v-if="isGuideToc"></guide-toc>
          </div>
        </div>
      </div>
      <div class="page-body">
        <router-view @updateStatus="setPageFrame"></router-view>
      </div>

      <div class="page-footer">2021 © Saltlux Inc</div>
    </main>
  </div>
</template>
<script>
import guideToc from "./common/guideToc";
export default {
  name: "publishingLayout",
  components:{
    guideToc,
  },
  created() {

  },
  data() {
    return {
      isGuideToc: false,
    };
  },
  methods: {
    setPageFrame(val) {
      this.isGuideToc = !this.isGuideToc;
      console.log("val", val);
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>