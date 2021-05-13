<template>
  <fragment>
    <s-svg-icon v-if="useIcon.left" :dirClass="'left'" :name="useIcon.left"></s-svg-icon>
    <s-svg-icon v-if="useIcon.top" :dirClass="'top'" :name="useIcon.top"></s-svg-icon>
    <span class="text"><slot></slot></span>
    <s-svg-icon v-if="useIcon.right" :dirClass="'right'" :name="useIcon.right"></s-svg-icon>
    <s-svg-icon v-if="useIcon.bottom" :dirClass="'bottom'" :name="useIcon.bottom"></s-svg-icon>
<!--    아이콘객체: {{ useIcon }}-->
  </fragment>
</template>

<script>
import mixinIcon from "@/components/common/mixins/mixinIcons.js";

export default {
  name: "CompIconGroup",
  mixins: [mixinIcon],
};
</script>
