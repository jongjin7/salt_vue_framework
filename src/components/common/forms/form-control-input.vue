<template>
<fragment>
    <label :for="`${labelFor}-${new Date().valueOf()}`">{{ label }}</label>
    <input :type="type" @keyup="onKeyup" v-model="inputModel" :id="`${labelFor}-${new Date().valueOf()}`" :placeholder="placeholder" autocomplete="off" class="form-control">
</fragment>
</template>

<script>
export default {
  name: "form-control-input",
  props:{
    type:{
      type: String,
      default:"text",
    },
    modelData:{
      type:[String, Number],
    },
    name:{
      type: String,
    },
    label:{
      type: String,
    },
    labelFor:{
      type: String,
      default:"input-filed",
    },
    placeholder:{
      type: String,
    },

  },

  data() {
    return{
      inputModel : this.modelData,
    };
  },

  created() {
    this.$emit("myChildEvent");
    console.log("input created:::", this.labelFor);
  },

  methods:{
    onKeyup() {
      this.$emit("onChangeValue", this.inputModel);
    },
  },
};
</script>