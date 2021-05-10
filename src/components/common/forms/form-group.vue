<template>
<div class="form-group" :class="optionalClass">
  <slot :myData ="mydata"></slot>

  <p class="form-desc" v-if="description">
    <small>{{ description }}</small>
  </p>
</div>
</template>

<script>
export default {
  name: "form-group",
  props:{
    inline:{
      type: Boolean,
      defaults: false,
    },
    description:{
      type: String,
    },
    label:{
      type: String,
    },
    labelFor:{
      type: String,
    },
    mydata:{
      gap:1,
      bap:2,
    },

  },
  computed:{
    optionalClass:function() {
      return[
        this.inline ? "form-inline" : ""
      ];
    },
  },

  created() {
    console.log("formGroup created:::", this.labelFor);

  },

};
</script>