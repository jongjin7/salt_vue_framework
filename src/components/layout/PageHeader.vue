<template>
  <div class="page-header">
    <div class="container">
      <div class="row align-between">
        <div class="first-content">
          <h1>{{ title }}</h1>

        </div>
        <div class="second-content">
          <ul class="util-list">
            <li class="list-item">
              <div class="info-holder type-pill"><span class="text">저장소명 출력</span></div>
            </li>
            <li class="list-item">
              <s-custom-select pill size="lg" btnIcon="global" @onChange="changeLanguage" :options="[{text:'한국어', value:'kr', selected: true},{text:'일본어', value:'jp', disabled: true},{text:'영어', value:'en'}]"></s-custom-select>
            </li>
            <li class="list-item">
              <s-button title="내정보 수정" icon="fill_person" circle only-icon class="user"></s-button>
            </li>
          </ul>
              <s-custom-select class="abc" @onChange ="changeLanguage" :options="[{text:'한국어', value:'kr', selected: true},{text:'일본어', value:'jp', },{text:'영어', value:'en'}]"></s-custom-select>
              <s-custom-select class="abc" @onChange ="changeLanguage" size="lg" :options="[{text:'한국어', value:'kr', selected: true},{text:'일본어', value:'jp', },{text:'영어', value:'en'}]"></s-custom-select>
              <s-custom-select class="abc jongjin" @onChange ="changeLanguage" size="lg" :options="[{text:'한국어', value:'kr',},{text:'일본어', value:'jp', selected: true },{text:'영어', value:'en'}]"></s-custom-select>
        </div>
      </div>
      <!-- 추가적 컨텐츠 -->
      <div class="row">
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
    changeLanguage(value) {
      console.log("언어변경: ==>", value);
    },
  },
};
</script>
