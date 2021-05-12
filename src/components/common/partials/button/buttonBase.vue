<template>
  <fragment>
    <a href="" v-if="type == 'link'" class="btn" :class="btnClass">
      <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>
    </a>
    <button v-else :type="type === 'toggle' ? 'button' : type" class="btn" :class="btnClass" @click="onClick">
      <comp-icon-group :icon="icon"><slot></slot></comp-icon-group>
    </button>
  </fragment>
</template>

<script>
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
    addClass:{
      type: String,
    },
  },
  components: {
    compIconGroup,
  },
  data() {
    return{
      btnClass:this.addClass,
    };
  },
  computed:{

  },
  created() {
    console.log("button-props-icon:", this.icon);
  },
  methods:{
    onClick(e) {
      console.log("eeeee", this.btnClass, ":::::", this.btnClass.match(/\son/g));
      if(this.type === "toggle") {

        if(!(/\bon\b/).test(this.btnClass)) {
          this.btnClass += " on";
        }else{
          console.log("on hasClass==>");
          this.btnClass = this.btnClass.replace(/(\bon\s)|(\son$)/, "");

        }
      }
    },
  },
};

import compIconGroup from "../icon/compIconGroup.vue";
</script>