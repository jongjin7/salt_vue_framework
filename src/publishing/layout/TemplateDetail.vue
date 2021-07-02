<template>
  <div class="page-body-contents">
    <section>
      <div class="container">
        <div class="row">
          <div class="content">
            <div class="detail-title-area">
              <div class="lft-cont">
                <h3>기본형 테이블</h3>
              </div>
              <div class="rgt-cont">
                <s-button>버튼1</s-button>
                <s-button>버튼2</s-button>
                <s-button>버튼3</s-button>
              </div>
            </div>
            <table class="table table-hover table-datatable text-center table-fixed">
              <thead>
              <tr>
                <th class="text-left">셀 제목#0</th>
                <th>셀 제목#1</th>
                <th>셀 제목#2</th>
                <th>셀 제목#3</th>
                <th>셀 제목#4</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-left">셀 목록 내용#0</td>
                <td>셀 목록 내용#1</td>
                <td>셀 목록 내용#2</td>
                <td>셀 목록 내용#3</td>
                <td>셀 목록 내용#4</td>
              </tr>
              <!-- 내용이 없을때 -->
              <tr class="none-data">
                <td colspan="5">
                  등록된 내용이 없습니다.
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <section>
          <div class="container">
            <div class="row">
              <div class="content">
                <div class="detail-title-area">
                  <div class="lft-cont">
                    <h3>기본형 테이블</h3>
                  </div>
                  <div class="rgt-cont">
                    <s-button>버튼1</s-button>
                    <s-button>버튼2</s-button>
                    <s-button>버튼3</s-button>
                  </div>
                </div>
                <table class="table table-hover table-datatable table-checkable text-center table-fixed">
                  <thead>
                  <tr>
                    <th>
                      <b-form-checkbox class="none-label"></b-form-checkbox>
                    </th>
                    <th class="text-left">셀 제목#1</th>
                    <th>셀 제목#2</th>
                    <th>셀 제목#3</th>
                    <th>셀 제목#4</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><b-form-checkbox class="none-label"></b-form-checkbox></td>
                    <td class="text-left">셀 목록 내용#1</td>
                    <td>셀 목록 내용#2</td>
                    <td>셀 목록 내용#3</td>
                    <td>셀 목록 내용#4</td>
                  </tr>
                  <tr>
                    <td><b-form-radio class="none-label"></b-form-radio></td>
                    <td class="text-left">셀 목록 내용#1</td>
                    <td>셀 목록 내용#2</td>
                    <td>셀 목록 내용#3</td>
                    <td>셀 목록 내용#4</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TemplateDetail",
  data() {
    return {
      pageTitle: "상세화면 기본 레이아웃",
    };
  },
  mounted() {
    this.$eventBus.pageHeaderTitle(this.pageTitle);
    document.querySelector(".wrapper").classList.remove("s-guide");
    document.querySelector(".page-header").querySelectorAll(".row")[1].style.display = "none";
  },
  beforeDestroy() {
    document.querySelector(".wrapper").classList.add("s-guide");
    document.querySelector(".page-header").querySelectorAll(".row")[1].style.display = "block";
  },
  methods: {

  },
};
</script>
