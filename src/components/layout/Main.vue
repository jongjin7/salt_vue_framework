<template>
  <main class="main-container">
    <div class="inner-wrap">
      <page-header>
        <template><slot name="page-header-content"></slot></template>
      </page-header>
      <div class="page-body">
        <router-view @updateStatus="setPageFrame"></router-view>
      </div>
      <div class="page-footer">2021 © Saltlux Inc</div>
    </div>
  </main>
</template>

<script>
import PageHeader from "@/components/layout/PageHeader";
export default {
  name: "Main",
  components:{
    PageHeader,
  },

  data() {
    return{
      pageTitle:"",
    };
  },
  methods:{
    setPageFrame(frameData) {
      console.log("setPageFrame::", frameData, frameData.pageTitle);
      this.pageTitle = frameData.pageTitle;
    },
  },
};
</script>

