<template>
  <div class="page-body-contents" ref="comlist">
    <section>
      <div class="container">
        <div class="row">
          <h2>1. 아이콘</h2>
          <div class="content t">
            <h3>기본 아이콘</h3>
            <div class="bg-light">
              <s-svg-icon :name="icon" v-for="icon in svgIconList" :key="icon"></s-svg-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <h2>2. 벳지</h2>
          <div class="content">
            <h3>기본형</h3>
            <s-badge>기본 Badge</s-badge>

            <h3>Badge 사이즈</h3>
            <s-badge size="xs">제일 작은 Badge</s-badge>
            <s-badge size="sm">작은 Badge</s-badge>
            <s-badge size="md">명시적 정의, 기본 Badge</s-badge>
            <s-badge>기본 Badge</s-badge>

            <h3>Badge 스타일: 컬러</h3>
            <s-badge>기본 Badge</s-badge>
            <s-badge color="primary">파란 Badge</s-badge>
            <s-badge color="danger">빨간 Badge</s-badge>
            <s-badge color="success">녹색 Badge</s-badge>

            <h3>아이콘 포함</h3>
            <s-badge>기본 Badge</s-badge>
            <s-badge icon="global">기본 왼쪽 아이콘 Badge</s-badge>
            <s-badge icon="global, book">왼쪽 다중 아이콘 Badge</s-badge>

            <s-badge :icon="{left:'global'}">명시적 왼쪽 아이콘 Badge</s-badge>
            <s-badge :icon="{top:'global'}">윗쪽 아이콘 Badge</s-badge>
            <s-badge :icon="{top:'global, link, book, book'}">윗쪽 다중 아이콘 Badge</s-badge>
            <s-badge :icon="{right:'book'}">오른쪽 아이콘 Badge</s-badge>
            <s-badge :icon="{bottom:'global'}">아래쪽 아이콘 Badge</s-badge>
            <s-badge :icon="{left:'global', right:'book'}">좌우 아이콘 Badge</s-badge>
            <s-badge :icon="{left:'global', top:'book', right:'book', bottom: 'global'}">좌우상하 아이콘 Badge</s-badge>
            <s-badge :icon="{left:'global, link, book, book',bottom:'book, global'}">다중아이콘 아이콘 Badge</s-badge>
          </div>

        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <h2>3. 버튼</h2>
          <div class="content">
            <h3>기본형</h3>
            <s-button>버튼</s-button>
            <s-button type="button">명시적 타입 버튼</s-button>
            <s-button type="submit" @onClick="clickBtn">Submit</s-button>
            <s-button outline type="reset">Reset</s-button>
            <s-button outline>닫기</s-button>
            <s-button type="toggle" class="custom-class-name" @onChangeStatus="clickToggleBtn"><span>토글 버튼(토글 전용 클래스)==> <span
                v-if="btnStatus">on</span><span v-else>off</span></span></s-button>
            <s-button type="link" href="form" title="form-link">링크형 버튼(A태그로 랜더링)</s-button>
            <s-button type="link" color="light" href="http://www.naver.com" target="_blank">아웃 링크 버튼</s-button>

            <h3>버튼 스타일: 형태</h3>
            <b-form @submit.prevent="onSubmit">
              <s-button type="submit">기본형 버튼</s-button>
              <s-button outline>아웃라인 버튼</s-button>
              <s-button pill>알약 버튼</s-button>
              <s-button rounded>라운드 버튼</s-button>
              <s-button squared>사각 버튼</s-button>
              <s-button circle>서클형 버튼</s-button>
              <s-button pill color="primary">알약 Primary 채움 버튼</s-button>
              <s-button pill outline color="primary">알약 Primary Outline 버튼</s-button>
              <s-button pill color="danger">알약 Warning 채움 버튼</s-button>
              <s-button pill outline color="danger">알약 Warning Outline 버튼</s-button>
            </b-form>

            <h3>버튼 스타일: 색상</h3>
            <s-button>기본 컬러 버튼</s-button>
            <s-button color="primary">메인 컬러(테마#1) 버튼</s-button>
            <s-button color="secondary">테마#2 컬러 버튼</s-button>
            <s-button color="special">테마#3 컬러 버튼</s-button>
            <!--            <s-button color="light">밝은 버튼</s-button>-->
            <s-button color="success">실행 성공 버튼</s-button>
            <s-button color="danger">삭제나 경고 버튼</s-button>

            <h3>아이콘 포함</h3>
            <s-button icon="global">버튼: 좌측 아이콘</s-button>
            <s-button :icon="{right:'book'}">버튼: 우측 아이콘</s-button>
            <s-button :icon="{left:'global', right:'book'}">좌우 아이콘 버튼</s-button>

            <h3>아이콘 전용</h3>
            <s-button icon="global" size="xs" circle only-icon>아이콘만...</s-button>
            <s-button icon="global" size="sm" circle only-icon>아이콘만...</s-button>
            <s-button icon="global" size="md" circle only-icon>아이콘만...</s-button>
            <s-button icon="global" size="lg" circle only-icon>아이콘만...</s-button>
            <s-button icon="global" size="xl" circle only-icon>아이콘만...</s-button>
            <s-button icon="pencil" color="primary" circle only-icon title=""></s-button>
            <s-button icon="plus" color="primary" circle only-icon title=""></s-button>
            <s-button icon="minus" color="primary" circle only-icon title=""></s-button>

            <h3>상태 버튼</h3>
            <h4>활성 상태</h4>
            <div>
              <s-button color="primary">버튼</s-button>
              <s-button color="secondary">버튼</s-button>
              <s-button color="danger">버튼</s-button>
              <s-button color="primary" outline>버튼</s-button>
              <s-button color="secondary" outline>버튼</s-button>
              <s-button color="danger" outline>버튼</s-button>
            </div>
            <h4 style="margin-top:8px">비활성 상태</h4>
            <div>
              <s-button color="primary" disabled>버튼</s-button>
              <s-button color="special" disabled>버튼</s-button>
              <s-button color="danger" disabled>버튼</s-button>
              <s-button color="primary" outline disabled>버튼</s-button>
              <s-button color="special" outline disabled>버튼</s-button>
              <s-button color="danger" outline disabled>버튼</s-button>
            </div>

            <h3>버튼 사이즈</h3>
            "breakpoints": ["xs", "sm", "md", "lg", "xl"]
            <s-button size="xs">가장 작은 버튼</s-button>
            <s-button size="sm">작은 버튼</s-button>
            <s-button size="md">기본 버튼</s-button>
            <s-button size="lg">큰 버튼</s-button>
            <s-button size="xl">가장 큰 버튼</s-button>

            <h3>버튼 그룹</h3>
            <div class="btn-group">
              <s-button>기본 버튼</s-button>
              <s-button>백 버튼</s-button>
            </div>

            <h3>버튼 정렬</h3>
            <div class="btn-wrap align-left">
              <s-button>버튼</s-button>
              <s-button>버튼</s-button>
            </div>
            <br>
            <div class="btn-wrap align-center">
              <s-button>버튼</s-button>
              <s-button>버튼</s-button>
            </div>
            <br>

            <div class="btn-wrap align-right">
              <s-button>버튼</s-button>
              <s-button>버튼</s-button>
            </div>
            <br>

            <div class="btn-wrap align-between">
              <s-button>왼쪽 버튼</s-button>
              <s-button>오른쪽 버튼</s-button>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
<script>
import UI from "@/components/common/partials/icon/iconsList/svgUI";
import tocLink from "@/publishing/pub-only/mixinTocLink.js";

export default {
  name: "ui-base",
  mixins: [tocLink],
  data() {
    return {
      frameData: {
        pageTitle: "기본 UI 컴포넌트",
        tocData: [],
      },
      svgIconList: Object.keys({ ...UI, }),
      btnStatus: false,
    };
  },
  mounted() {
    this.$eventBus.guideTitleToc(this.frameData);
  },
  beforeDestroy() {
    console.log("base beforeDestroyed!!!!");
  },
  destroyed() {
    console.log("base destroyed");
  },
  methods: {
    clickBtn() {
      console.log("일반 클릭!!");
    },

    clickToggleBtn(payload) {
      console.log("토글버튼 클릭:=>", payload);
      this.btnStatus = !this.btnStatus;
    },
    onSubmit() {
      console.log("onsubmit");
    },
  },
};
</script>
<style>
.t .s-icon {
  margin: 0 2px;
}
</style>
