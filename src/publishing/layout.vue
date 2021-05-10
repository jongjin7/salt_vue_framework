<script src="mixins/mixin_tocLink.js"></script>
<template>
  <div class="wrapper s-guide">
    <!-- 레이아웃 시작 -->
    <header class="side-container">
      <nav>
        <ul>
          <li><router-link :to="{name:'main'}">메인으로</router-link></li>
          <li><router-link :to="{name:'publishing-list'}">퍼블리싱 페이지리스트</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="main-container">
      <div class="page-header">
        <div class="container">
          <div class="row">
            <h1>{{ pageTitle }}</h1>
            <guide-toc v-if="isGuideToc" :tocData="guideTocData"></guide-toc>
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
  watch:{
    // $route(to, from) {
    // console.log("watchRouter", to, from, " route:::", this.$route, " title::", to.params);
    // },
  },
  data() {
    return {
      pageTitle:"페이지 타이틀",
      isGuideToc: false,
      guideTocData: null,
    };
  },
  created() {
    console.log("layoutCreated:::", this.$route.params, this.$route.params.pageTitle);
  },
  methods: {
    setPageFrame(frameData) {
      console.log("setPageFrame::", frameData, frameData.pageTitle);
      this.isGuideToc = frameData.tocData;
      this.pageTitle = frameData.pageTitle;
      if(this.isGuideToc) this.guideTocData = frameData.tocData;
      else this.guideTocData = null;
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>