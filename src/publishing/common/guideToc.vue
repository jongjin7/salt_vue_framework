<template>
  <nav class="toc">
    <ul>
      <li v-for="toc in tocData" :key="toc.main.text">
        <a :href="toc.main.link" class="title">{{ toc.main.text }}</a>
        <ul>
          <li v-for="tocSub in toc.sub" :key="tocSub.text">
            <a :href="tocSub.link">{{tocSub.text}}</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "guideToc",
  props: {
    tocData: {
      type: Array,
    },
  },
};
</script>
