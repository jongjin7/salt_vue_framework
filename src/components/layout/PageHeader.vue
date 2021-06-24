<template>
  <div class="page-header">
    <div class="container">
      <div class="row align-between">
        <div class="first-content">
          <h1>{{ title }}</h1>

        </div>
        <div class="second-content">
          <ul class="command">
            <li>
              <div class="info-holder type-pill"><span class="text">저장소명 출력</span></div>
            </li>
            <li>
              <div class="custom-select">
                <s-button pill outline :icon="{left:'global', right:'book'}" class="type-pill">텍스트</s-button>
                <ul class="opt-list">
                  <li><button type="button">한국어</button></li>
                  <li><button type="button">일본어</button></li>
                  <li><button type="button">영어</button></li>
                </ul>
              </div>
            </li>
            <li>
              <s-button title="내정보 수정" icon="fill_person" circle only-icon class="user"></s-button>
            </li>
          </ul>
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
  },
};
</script>
