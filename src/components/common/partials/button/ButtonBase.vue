<template>
  <fragment>
    <a href="" v-if="type == 'link'" class="btn" :class="addClass">
      <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>
    </a>
    <button v-else :type="type === 'toggle' ? 'button' : type" class="btn" :class="addClass" @click="onClick">
      <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>
    </button>
  </fragment>
</template>

<script>
export default {
  name: "ButtonBase",
  props: {
    icon: {
      type: [String, Object],
    },
    type: {
      type: String,
      default: "button",
    },
    addClass:{
      type: String,
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
  computed:{

  },
  created() {
    console.log("button-props-icon:", this.icon);
  },
  methods:{
    onClick(e) {
      console.log("eeeee", e.currentTarget.classList);
      if(this.type === "toggle") {
        // if(!(/\bon\b/).test(this.btnClass)) {
        if(!e.currentTarget.classList.contains("on")) {
          // this.btnClass += " on";
          e.currentTarget.classList.add("on");
        }else{
          console.log("on hasClass==>");
          // this.btnClass = this.btnClass.replace(/\son(\b|$)/gi, "");
          e.currentTarget.classList.remove("on");
        }
        this.onChangeStatus();
      }else{
        this.onClickBtn();
      }
    },
    onChangeStatus() {
      this.$emit("onChangeStatus", this.status = !this.status);
    },
    onClickBtn() {
      this.$emit("onClick");
    },
  },
};

import compIconGroup from "../icon/CompIconGroup.vue";
</script>