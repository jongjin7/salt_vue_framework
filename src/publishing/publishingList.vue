<template>
  <section>
    <div class="container">
      <div class="row">
        <ol class="page-list">
          <li class="list-item">
            <h2 class="title">Common</h2>
            <ul class="sub-menu">
              <li class="list-item work"><router-link :to="{name:'ui-base'}"><span class="text">기본 요소</span><span class="status">2021.05.04</span></router-link></li>
              <li class="list-item work"><router-link :to="{name:'form-base'}"><span class="text">Form 엘리먼트</span><span class="status">2021.05.04</span></router-link></li>
              <li class="list-item"><router-link :to="{name:'my-form-base'}"><span class="text">개발중인 폼 컴포넌트</span><span class="status">2021.05.04</span></router-link></li>
            </ul>
          </li>
          <li class="list-item">
            <h2 class="title">메인 메뉴 #1</h2>
            <ul class="sub-menu">
              <li class="list-item end"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item modify"><a href=""><span class="text">서브메뉴2</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴3</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴4</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴5</span><span class="status">2021.05.04</span></a></li>
            </ul>
          </li>
          <li class="list-item">
            <h2 class="title">메인 메뉴 #2</h2>
            <ul class="sub-menu">
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "publishingList",

  data() {
    return {
      frameData:{
        pageTitle:"퍼블리싱 페이지리스트",
        tocData:false,
      },
    };
  },
  created() {
    this.$emit("updateStatus", this.frameData);
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods:{

  },
};
</script>
<style lang="scss" scoped>
h2{
  margin-top: 30px;
}
</style>