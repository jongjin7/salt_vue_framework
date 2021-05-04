<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <h2 id="icons">1. 아이콘</h2>
          <div class="content">
            <h3 id="icon-basic">기본 아이콘</h3>
            <s-svg-icon name="global"></s-svg-icon>
            <s-svg-icon name="book"></s-svg-icon>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <h2 id="badges">2. 벳지</h2>
          <div class="content">
            <h3 id="badge-basic">기본형 벳지</h3>
            <s-badge>기본 벳지</s-badge>

            <h3 id="badge-icon">아이콘 포함</h3>
            <s-badge>기본 벳지</s-badge>
            <s-badge icon="global">기본 왼쪽 아이콘 벳지</s-badge>
            <s-badge icon="global, book">왼쪽 다중 아이콘 벳지</s-badge>

            <s-badge :icon="{left:'global'}">명시적 왼쪽 아이콘 벳지</s-badge>
            <s-badge :icon="{top:'global'}">윗쪽 아이콘 벳지</s-badge>
            <s-badge :icon="{top:'global, link, book, book'}">윗쪽 다중 아이콘 벳지</s-badge>
            <s-badge :icon="{right:'book'}">오른쪽 아이콘 벳지</s-badge>
            <s-badge :icon="{bottom:'global'}">아래쪽 아이콘 벳지</s-badge>
            <s-badge :icon="{left:'global', right:'book'}">좌우 아이콘 벳지</s-badge>
            <s-badge :icon="{left:'global', top:'book', right:'book', bottom: 'global'}">좌우상하 아이콘 벳지</s-badge>
            <s-badge :icon="{left:'global, link, book, book',bottom:'book, global'}">다중아이콘 아이콘 벳지</s-badge>
          </div>

        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <h2 id="buttons">3. 버튼</h2>
          <h3 id="button-basic">기본형</h3>
          <div class="content">
            <s-button>버튼</s-button>
            <s-button type="button">명시적 버튼</s-button>
            <s-button type="input">폼 인풋 버튼</s-button>
            <s-button type="submit">서브밋 버튼</s-button>
            <s-button type="link">링크형 버튼(A태그로 랜더링)</s-button>
          </div>

          <h3 id="button-icon">아이콘 포함</h3>
          <div class="content">
            <s-button icon="global">아이콘 버튼</s-button>
            <s-button :icon="{right:'book'}">아이콘 버튼</s-button>
            <s-button :icon="{left:'global', right:'book'}">아이콘 버튼</s-button>
          </div>

          <hr>
          <h3 id="button-group">버튼 그룹</h3>
          <div class="content">
            <div class="btn-wrap">
              <s-button>기본 버튼</s-button>
              <s-button>백 버튼</s-button>
            </div>
            <br>
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
export default {
  name: "ui-base",
  created() {
    this.$emit("updateStatus", { test:1111, });
  },
  beforeDestroy() {
    this.$emit("updateStatus", false);
  },
};
</script>