<template>
  <div>
    <b-button variant="apply" size="lg" @click="open">사이드 팝업열기</b-button>
    <b-button variant="apply" size="lg" @click="showModal">모달 팝업 열기</b-button>
    <div style="height:500px; border: 2px solid blue; margin: 50px 30px"></div>
    <!-- 사이드용 팝업 -->
    <b-sidebar v-model="isSidebarOpen" no-header backdrop shadow right bg-variant="white" >
      <template>
        <div class="pop-content-header">
          <h2>타이틀 출력</h2>
          <s-button icon="global" class="btn-close" title="닫기" @onClick="closeSidebar"></s-button>
        </div>
        <div class="pop-content-body">
          <div>
            본문 내용 출력<br />본문 내용 출력본문 내용 출력<br />본문 내용 출력<br />본문 내용 출력본문 내용 출력<br />본문 내용 출력<br />본문 내용 출력본문 내용 출력<br />본문 내용 출력<br />본문
            내용 출력본문 내용 출력
          </div>
        </div>
        <div class="pop-content-footer">
          <s-button color="apply" @onClick="closeSidebar">확인</s-button>
        </div>
      </template>
    </b-sidebar>

    <!-- 모달 팝업(가운데 뜨는 팝업, 아이디로 구분) -->
    <b-modal v-model="isModalShow" scrollable centered dialog-class="full-content">
      <template v-slot:modal-header>
        <h2>타이틀 출력</h2>
        <s-button icon="global" addClass="btn-close" title="닫기" @onClick="hideModal"></s-button>
      </template>
      <template>
        <div class="pop-content-body">
          <!-- 본문 내용  -->
          팝업 본문 내용 0<br>
          팝업 본문 내용 1<br>
          팝업 본문 내용 2<br>
          팝업 본문 내용 3<br>
          팝업 본문 내용 4<br>
          팝업 본문 내용 5<br>
          팝업 본문 내용 6<br>
          팝업 본문 내용 7<br>
          팝업 본문 내용 8<br>
          팝업 본문 내용 9<br>
          팝업 본문 내용 0<br>
          팝업 본문 내용 1<br>
          팝업 본문 내용 2<br>
          팝업 본문 내용 3<br>
          팝업 본문 내용 4<br>
          팝업 본문 내용 5<br>
          팝업 본문 내용 6<br>
          팝업 본문 내용 7<br>
          팝업 본문 내용 8<br>
          팝업 본문 내용 9<br>
          팝업 본문 내용 0<br>
          팝업 본문 내용 1<br>
          팝업 본문 내용 2<br>
          팝업 본문 내용 3<br>
          팝업 본문 내용 4<br>
          팝업 본문 내용 5<br>
          팝업 본문 내용 6<br>
          팝업 본문 내용 7<br>
          팝업 본문 내용 8<br>
          팝업 본문 내용 9<br>
          팝업 본문 내용 0<br>
          팝업 본문 내용 1<br>
          팝업 본문 내용 2<br>
          팝업 본문 내용 3<br>
          팝업 본문 내용 4<br>
          팝업 본문 내용 5<br>
          팝업 본문 내용 6<br>
          팝업 본문 내용 7<br>
          팝업 본문 내용 8<br>
          팝업 본문 내용 9<br>
          팝업 본문 내용 0<br>
          팝업 본문 내용 1<br>
          팝업 본문 내용 2<br>
          팝업 본문 내용 3<br>
          팝업 본문 내용 4<br>
          팝업 본문 내용 5<br>
          팝업 본문 내용 6<br>
          팝업 본문 내용 7<br>
          팝업 본문 내용 8<br>
          팝업 본문 내용 9<br>
        </div>
      </template>
      <template v-slot:modal-footer>
        <s-button color="apply" @onClick="hideModal">확인</s-button>
      </template>
    </b-modal>
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
      isSidebarOpen: false,
    };
  },
  mounted() {
    this.$emit("updateStatus", this.frameData);
  },
  methods: {
    closeSidebar() {
      this.isSidebarOpen = false;
    },

    open() {
      this.isSidebarOpen = true;
    },

    // modal
    showModal() {
      this.isModalShow = true;
    },
    hideModal() {
      this.isModalShow = false;
    },
  },
};
</script>