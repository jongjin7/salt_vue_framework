<template>
  <fragment>
    <span class="s-icon" :class="`icon-${dirClass}`" v-if="Array.isArray(name)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        v-for="(item, index) in name"
        :key="`item-${index}`"
        :viewBox="svgIcons[item].viewBox"
        :aria-labelledby="item"
        v-html="svgIcons[item].code"
      ></svg>
    </span>

    <span class="s-icon" :class="`icon-${dirClass}`" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" :viewBox="svgIcons[name].viewBox" :aria-labelledby="name" v-html="svgIcons[name].code"></svg>
    </span>
  </fragment>
</template>
<script>
import UI from "./iconsList/svgUI";

const iconList = { ...UI, };
export default {
  name: "iconsBase",
  computed: {
    svgIcons: () => {
      return iconList;
    },
  },
  data() {
    return {};
  },
  props: {
    name: { type: [String, Array], required: true, },
    dirClass: { type: String, default: "left", },
    viewBox: { type: String, default: "0 0 24 24", },
  },
};
</script>