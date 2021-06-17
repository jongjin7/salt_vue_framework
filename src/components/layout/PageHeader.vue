<template>
  <div class="page-header">
    <div class="container">
      <div class="row">
        <h1>{{ title }}</h1>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      title: "",
    };
  },
  created() {
    this.$eventBus.$on("setTitle", this.setTitle);
  },
  methods: {
    setTitle(param) {
      this.title = param;
    },
  },
};
</script>
