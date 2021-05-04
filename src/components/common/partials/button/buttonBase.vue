<template>
  <fragment>
    <a href="" v-if="type == 'link'" class="btn">
      <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>
    </a>
    <button v-else :type="type" class="btn">
      <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>
    </button>
  </fragment>
</template>

<script>
import compIconGroup from "../icon/compIconGroup.vue";

export default {
  name: "buttonBase",
  props: {
    icon: {
      type: [String, Object],
    },
    type: {
      type: String,
      default: "button",
    },
  },
  components: {
    compIconGroup,
  },
  created() {
    console.log("button-props-icon:", this.icon);
  },
};
</script>