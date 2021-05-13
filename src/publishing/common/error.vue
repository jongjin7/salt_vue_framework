<script src="../mixins/mixinTocLink.js"></script>
<template>
<div>아무런 내용이 없다.
  <router-link :to="{name:'main'}">메인으로</router-link>
</div>
</template>

<script>
export default {
  props:["id", "name"],
  name: "error",
};
</script>
