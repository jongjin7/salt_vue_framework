<template>
  <div class="page-body-contents">
    <s-button @onClick="isSidebarShow = true">사이드 팝업 열기 (기본형)</s-button>
    <s-button @onClick="isSidebarOtherShow = true">사이드 팝업 (헤더풋터 고정)</s-button>
    <s-button @onClick="isModalShow = true">모달 팝업 (기본형)</s-button>
    <s-button @onClick="isModalOtherShow = true">모달 팝업 (헤더/풋터 고정)</s-button>


    <div style="height:500px; border: 2px solid blue; margin: 50px 30px"></div>
    <!-- 사이드용 팝업 -->
    <b-sidebar v-model="isSidebarShow" no-header backdrop shadow right>
      <template>
        <div class="pop-content-header">
          <h2 class="h1">타이틀 출력</h2>
          <s-button icon="thin_cross" only-icon class="btn-close" title="닫기" @onClick="isSidebarShow=false"></s-button>
        </div>
        <div class="pop-content-body">
          <div class="my-4" v-for="i in 20" :key="i">
            본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용
            출력<br/>본문
            내용 출력본문 내용 출력
          </div>
        </div>
        <div class="pop-content-footer">
          <div class="btn-wrap align-right">
            <s-button outline size="lg" @onClick="isSidebarShow=false">닫기</s-button>
            <s-button color="dark" size="lg">확인</s-button>
          </div>
        </div>
      </template>
    </b-sidebar>

    <b-sidebar v-model="isSidebarOtherShow" backdrop shadow right>
      <template #header>
        <h2 class="h1">타이틀 출력</h2>
        <s-button icon="thin_cross" only-icon class="btn-close" title="닫기"
                  @onClick="isSidebarOtherShow=false"></s-button>
      </template>
      <template>
        <div class="pop-content-body">
          <div>
            본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용
            출력<br/>본문
            내용 출력본문 내용 출력
            본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용
            출력<br/>본문
            내용 출력본문 내용 출력본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용
            출력<br/>본문 내용 출력<br/>본문
            내용 출력본문 내용 출력본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용
            출력<br/>본문 내용 출력<br/>본문
            내용 출력본문 내용 출력본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용
            출력<br/>본문 내용 출력<br/>본문
            내용 출력본문 내용 출력본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용 출력<br/>본문 내용 출력<br/>본문 내용 출력본문 내용
            출력<br/>본문 내용 출력<br/>본문
            내용 출력본문 내용 출력
          </div>
        </div>
        <div class="pop-content-footer">
          <div class="btn-wrap align-right">
            <s-button outline size="lg" @onClick="isSidebarOtherShow=false">닫기</s-button>
            <s-button color="dark" size="lg">확인</s-button>
          </div>
        </div>
      </template>
      <!--<template #footer="{ hide }">
        <s-button outline size="lg" @onClick="hide">닫기</s-button>
        <s-button color="dark" size="lg">확인</s-button>
      </template>-->
    </b-sidebar>

    <!-- 모달 기본형  -->
    <b-modal v-model="isModalShow" centered>
      <template #modal-header>
        <h2 class="h1">모달 팝업 기본형</h2>
        <s-button icon="thin_cross" only-icon class="btn-close" title="닫기" @onClick="isModalShow=false"></s-button>
      </template>
      <template>
        <p class="my-4" v-for="i in 40" :key="i">Hello from modal!</p>
      </template>
      <template #modal-footer>
        <div class="btn-wrap">
          <s-button outline size="lg" @onClick="isModalShow=false">닫기</s-button>
          <s-button color="dark" size="lg">확인</s-button>
        </div>
      </template>
    </b-modal>
    <!-- 헤더풋터 고정   -->
    <b-modal v-model="isModalOtherShow" scrollable centered dialog-class="full-content">
      <template #modal-header>
        <h2 class="h1">타이틀 출력</h2>
        <s-button icon="thin_cross" only-icon class="btn-close" title="닫기" @onClick="isModalOtherShow=false"></s-button>
      </template>
      <template>
        <div>
          <!-- 본문 내용  -->
          팝업 본문 내용 0<br>팝업 본문 내용 1<br>팝업 본문 내용 2<br>팝업 본문 내용 3<br>팝업 본문 내용 4<br>팝업 본문 내용 5<br>팝업 본문 내용 6<br>팝업 본문 내용
          7<br>팝업 본문 내용 8<br>팝업 본문 내용 9<br>팝업 본문 내용 0<br>팝업 본문 내용 1<br>팝업 본문 내용 2<br>팝업 본문 내용 3<br>팝업 본문 내용 4<br>팝업 본문
          내용 5<br>팝업 본문 내용 6<br>팝업 본문 내용 7<br>팝업 본문 내용 8<br>팝업 본문 내용 9<br>팝업 본문 내용 0<br>팝업 본문 내용 1<br>팝업 본문 내용 2<br>팝업
          본문 내용 3<br>팝업 본문 내용 4<br>팝업 본문 내용 5<br>팝업 본문 내용 6<br>팝업 본문 내용 7<br>팝업 본문 내용 8<br>팝업 본문 내용 9<br>팝업 본문 내용 0<br>팝업
          본문 내용 1<br>팝업 본문 내용 2<br>팝업 본문 내용 3<br>팝업 본문 내용 4<br>팝업 본문 내용 5<br>팝업 본문 내용 6<br>팝업 본문 내용 7<br>팝업 본문 내용 8<br>팝업
          본문 내용 9<br>팝업 본문 내용 0<br>팝업 본문 내용 1<br>팝업 본문 내용 2<br>팝업 본문 내용 3<br>팝업 본문 내용 4<br>팝업 본문 내용 5<br>팝업 본문 내용 6<br>팝업
          본문 내용 7<br>팝업 본문 내용 8<br>팝업 본문 내용 9<br>
        </div>
      </template>
      <template #modal-footer>
        <div class="btn-wrap">
          <s-button outline size="lg" @onClick="isModalOtherShow=false">닫기</s-button>
          <s-button color="dark" size="lg">확인</s-button>
        </div>
      </template>
    </b-modal>
    <!-- 모달 팝업(가운데 뜨는 팝업, 아이디로 구분) -->
  </div>
</template>

<script>
export default {
  name: "Popups",
  data() {
    return {
      frameData: {
        pageTitle: "팝업 컴포넌트",
        tocData: [],
      },
      isModalShow: false,
      isModalOtherShow: false,
      isSidebarShow: false,
      isSidebarOtherShow: false,
    };
  },
  mounted() {
    this.$eventBus.guideTitleToc(this.frameData);
  },
  methods: {},
};
</script>
