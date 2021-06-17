<template>
  <section>
    <div class="container">
      <div class="row">
        <ol class="page-list">
          <li class="list-item">
            <h2 class="title">Common</h2>
            <ul class="sub-menu">
              <li class="list-item w"><router-link :to="{name:'content-base'}"><span class="text">기본 스타일</span><span class="status">2021.05.04</span></router-link></li>
              <li class="list-item w"><router-link :to="{name:'ui-base'}"><span class="text">UI 기본 컴포넌트</span><span class="status">2021.05.04</span></router-link></li>
              <li class="list-item w"><router-link :to="{name:'form-base'}"><span class="text">Form 컴포넌트</span><span class="status">2021.05.04</span></router-link></li>
              <li class="list-item w"><router-link :to="{name:'table-base'}"><span class="text">Table 컴포넌트</span><span class="status">2021.05.04</span></router-link></li>
              <li class="list-item w"><router-link :to="{name:'comp-ui'}"><span class="text">자주 사용하는 UI 컴포넌트</span><span class="status">2021.05.04</span></router-link></li>
              <li class="list-item w"><router-link :to="{name:'boot-popup'}"><span class="text">팝업 컴포넌트</span><span class="status">2021.05.04</span></router-link></li>
            </ul>
          </li>
          <li class="list-item">
            <h2 class="title">페이지 샘플</h2>
            <ul class="sub-menu">
              <li class="list-item work m"><router-link :to="{name:'boot-popup'}"><span class="text">기본 페이지 구성 샘플</span><span class="status">2021.05.04</span></router-link></li>
              <li class="list-item work e"><router-link :to="{name:'boot-popup'}"><span class="text">테마 페이지 적용 샘플</span><span class="status">2021.05.04</span></router-link></li>
            </ul>
          </li>
          <li class="list-item">
            <h2 class="title">개발용 퍼블리싱 페이지</h2>
            <ul class="sub-menu">
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
              <li class="list-item"><a href=""><span class="text">서브메뉴1</span><span class="status">2021.05.04</span></a></li>
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
      },
    };
  },
  created() {
    this.$eventBus.guideTitleToc(this.frameData);
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods:{

  },
};
</script>
