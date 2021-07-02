<template>
<fragment>
    <input :type="type" @keyup="onKeyup" v-model="inputModel" :id="labelFor" :placeholder="placeholder" autocomplete="off" class="form-control">
    <label :for="labelFor" class="form-label"><span class="text">{{ label }}</span></label>
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
