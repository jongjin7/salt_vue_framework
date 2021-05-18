<!--<template>-->
<!--  <fragment>-->
<!--    <a href="" v-if="type == 'link'" class="btn" :class="addClass">-->
<!--      <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>-->
<!--    </a>-->
<!--    <button v-else :type="type === 'toggle' ? 'button' : type" class="btn" :class="addClass" @click="onClick">-->
<!--      <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>-->
<!--    </button>-->
<!--  </fragment>-->
<!--</template>-->

<script>
export default {
  name: "ButtonBase",
  props: {
    type: {
      type: String,
      default: "button",
    },
    icon: {
      type: [String, Object],
    },
    href:{
      type: String,
    },
    variant:{
      type: String,
    },
    color:{
      type: String,
    },
    pill:{
      type: Boolean,
    },
    rounded:{
      type: Boolean,
    },
    squared:{
      type: Boolean,
    },
    outline:{
      type: Boolean,
    },
  },
  components: {
    compIconGroup,
  },
  data() {
    return{
      // btnClass:this.addClass,
      status: false,
    };
  },
  render(createElement) {
    let isLink = (this.type === "link") ? true : false;
    let btnAttrs = isLink ? { href : this.href, } : { type: this.type === "toggle" ? "button" : this.type, };
    let btnColor = this.color ? ` btn-${this.color}` : " btn-default";
    let btnPill = this.pill ? " btn-pill" : "";
    let btnRounded = this.rounded ? " btn-rounded" : "";
    let btnSquared = this.squared ? " btn-squared" : "";
    let btnOutline = this.outline ? " btn-outline" : "";
    return createElement(isLink ? "a" : "button", {
      class: `btn${btnColor}${btnPill}${btnRounded}${btnSquared}${btnOutline}`,
      attrs: btnAttrs,
      on:{
        click: this.onClick,
      },
    },
    [createElement(compIconGroup, {
      props: {
        icon: this.icon,
      },
    }, this.$slots.default)]);
  },
  created() {
    console.log("button base created!");
  },
  methods:{
    onClick(e) {
      if(this.type === "toggle") {
        // if(!(/\bon\b/).test(this.btnClass)) {
        if(!e.currentTarget.classList.contains("on")) {
          // this.btnClass += " on";
          e.currentTarget.classList.add("on");
        }else{
          // this.btnClass = this.btnClass.replace(/\son(\b|$)/gi, "");
          e.currentTarget.classList.remove("on");
        }
        this.onChangeStatus();
      }else{
        this.onClickBtn(e);
      }
    },
    onChangeStatus() {
      this.$emit("onChangeStatus", this.status = !this.status);
    },
    onClickBtn(e) {
      if(this.type === "link") {
        if(e.currentTarget.target !== "_blank") {
          e.preventDefault();
          this.$router.push(this.href);
        }
      }else{
        this.$emit("onClick");
      }
    },
  },
};

import compIconGroup from "../icon/CompIconGroup.vue";
</script>