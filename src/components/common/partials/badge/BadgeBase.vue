<template>
  <span class="badge">
    <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>
  </span>
</template>

<script>
import compIconGroup from "../icon/CompIconGroup.vue";

export default {
  name: "BadgeBase",
  components: {
    compIconGroup,
  },
  props: {
    icon: {
      type: [String, Object],
    },
  },
  data() {
    return {};
  },
  created() {
    // console.log('badge-props-icon:', this.icon)
  },
};
</script>
