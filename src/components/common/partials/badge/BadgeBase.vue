<template>
  <span class="badge" :class="customClass">
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
    color: {
      type: String,
    },
    pill: {
      type: Boolean,
    },
    rounded: {
      type: Boolean,
    },
    circle: {
      type: Boolean,
    },
    squared: {
      type: Boolean,
    },
    outline: {
      type: Boolean,
    },
    onlyIcon: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
    },
  },
  data() {
    return {
      customClass:"",
    };
  },
  created() {
    this.init();
  },
  methods:{
    init() {
      let color = this.color ? ` ${this.color}` : " default";
      let pill = this.pill ? " pill" : "";
      let rounded = this.rounded ? " rounded" : "";
      let squared = this.squared ? " btn-squared" : "";
      let circle = this.circle ? " circle" : "";
      let outline = this.outline ? " outline" : "";
      let hasIcon = this.icon ? " has-icon" : "";
      let iconType = this.onlyIcon ? " only-icon" : "";
      let size = ` size-${this.size ? this.size : "md" }`;

      this.customClass = `${color}${pill}${rounded}${squared}${circle}${outline}${hasIcon}${iconType}${size}`;
    },
  },
};
</script>
