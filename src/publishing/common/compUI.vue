<template>
  <div class="page-body-contents" ref="comlist">
    <section>
      <div class="container">
        <div class="row">
          <h2>1. 탭</h2>
          <div class="content">
            <h3>탭 컴포넌트(Change Type)</h3>
            <div class="tabs">
              <div>
                <ul class="nav-tabs">
                  <li class="nav-item">
                    <s-button class="nav-link on">첫번째 탭</s-button>
                  </li>
                  <li class="nav-item">
                    <s-button class="nav-link">두번째 탭</s-button>
                  </li>
                  <li class="nav-item">
                    <s-button class="nav-link">세번째 탭</s-button>
                  </li>
                  <li class="nav-item">
                    <s-button class="nav-link">네번째 탭</s-button>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div style="margin-top: 10px; display: flex; align-items: center; justify-content: center; height:100px; background: #fafafa">
                  <h3>탭 컨텐츠 영역</h3>
                </div>
              </div>
            </div>


            <h3 style="margin-top:30px">탭 컴포넌트(레이어 타입)</h3>
            <b-tabs>
              <b-tab active>
                <template #title><span>첫번째 탭</span></template>
                <!-- 탭 컨텐츠 내용 -->
                <div style="display: flex; align-items: center; justify-content: center; height:100px; background: #fafafa">
                  <h3 class="tab-title">첫번째 탭 컨텐츠</h3>
                </div>
              </b-tab>

              <b-tab>
                <template #title><span>두번째 탭</span></template>
                <!-- 탭 컨텐츠 내용 -->
                <div style="display: flex; align-items: center; justify-content: center; height:100px; background: #fafafa">
                  <h3 class="tab-title">두번째 탭 컨텐츠</h3>
                  <div>내용 내용~~~~</div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import tocLink from "@/publishing/pub-only/mixinTocLink.js";

export default {
  name: "compUI",
  mixins: [tocLink],
  data() {
    return {
      frameData: {
        pageTitle: "UI가 모여있는 컴포넌트 이름은?",
        tocData: [],
      },
    };
  },
  created() {
    this.$eventBus.guideTitleToc(this.frameData);
  },
};
</script>
