<template>
  <div class="wrapper">
    <frame-navigation></frame-navigation>
    <frame-main>
      <template #page-header-content><slot name="page-header"></slot></template>
    </frame-main>
  </div>
</template>

<script>
import FrameNavigation from "@/components/layout/GlobalNavigation";
import FrameMain from "@/components/layout/Main";
export default {
  name: "CompFrame",
  components:{
    FrameNavigation,
    FrameMain,
  },
  methods:{

  },
};
</script>
