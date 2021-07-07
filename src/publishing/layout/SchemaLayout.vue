<template>
  <div class="page-body-contents">
    <section>
      <div class="container sec-page">
        <div class="row">
          <div class="content">
            <b-tabs>
              <b-tab>
                <template #title><span>첫번째 탭</span></template>
                <!-- 탭 컨텐츠 내용 -->
                <div
                    style="display: flex; align-items: center; justify-content: center; height:100px; background: #fafafa">
                  <h3 class="tab-title">두번째 탭 컨텐츠</h3>
                  <div>내용 내용~~~~</div>
                </div>
              </b-tab>
              <b-tab active>
                <template #title><span>두번째 탭</span></template>
                <!-- 탭 컨텐츠 내용 -->
                <div class="schema-layout">
                  <div class="ly-lft">
                    <!-- 메뉴 활성화 클래스: on -->
                    <nav class="nav-sch">
                      <ul class="nav-list">
                        <li class="nav-item depth-1">
                          <a href="#" class="nav-link depth-1-link on">
                            <span class="text">Class</span>
                          </a>
                          <div class="sub-menu-wrap">
                            <ul class="sub-menu depth-2">
                              <li class="nav-item">
                                <a href="" class="nav-link depth-2-link on">
                                  <span class="text">Action</span>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="" class="nav-link depth-2-link">
                                  <span class="text">Arts</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="nav-item depth-1">
                          <a href="#" class="nav-link depth-1-link">
                            <span class="text">Object Property</span>
                          </a>
                          <div class="sub-menu-wrap">
                            <ul class="sub-menu depth-2">
                              <li class="nav-item">
                                <a href="" class="nav-link depth-2-link">
                                  <span class="text">Action</span>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="" class="nav-link depth-2-link">
                                  <span class="text">Arts</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="nav-item depth-1">
                          <a href="#" class="nav-link depth-1-link">
                            <span class="text">Datatype Property</span>
                          </a>
                          <div class="sub-menu-wrap">
                            <ul class="sub-menu depth-2">
                              <li class="nav-item">
                                <a href="" class="nav-link depth-2-link">
                                  <span class="text">Action</span>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="" class="nav-link depth-2-link">
                                  <span class="text">Arts</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="ly-rgt">
                    <div class="inner-wrap">
                      <div class="container">
                        <div class="title-action-area">
                          <div class="lft-cont">
                            <h3>섹션 타이틀</h3>
                          </div>
                          <div class="rgt-cont">
                            <div class="btn-wrap">
                              <s-button color="primary">추가</s-button>
                            </div>
                          </div>
                        </div>
                        <dl class="table table-grid dl-detail">
                          <dt>이름</dt>
                          <dd class="wide-column"><input value="유저1" type="text" class="form-control"/></dd>
                          <dt>권한</dt>
                          <dd>
                            <b-form-select :options="[{ value: 'a', text: 'aaaaaa', },]"></b-form-select>
                          </dd>
                          <dt>정렬</dt>
                          <dd>
                            <b-form-radio-group
                                :options="[{ text: '오름차순', value: 'orange', }, { text: '내림차순', value: 'apple', },]"
                            ></b-form-radio-group>
                          </dd>
                        </dl>
                      </div>

                      <div class="container">
                        <div class="title-action-area">
                          <div class="lft-cont">
                            <h3>섹션 타이틀</h3>
                          </div>
                          <div class="rgt-cont">
                            <div class="btn-wrap">
                              <s-button color="primary">조회</s-button>
                            </div>
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
                          <tr>
                            <td class="text-left">셀 목록 내용#0</td>
                            <td>셀 목록 내용#1</td>
                            <td>셀 목록 내용#2</td>
                            <td>셀 목록 내용#3</td>
                            <td>셀 목록 내용#4</td>
                          </tr>
                          <tr>
                            <td class="text-left">셀 목록 내용#0</td>
                            <td>셀 목록 내용#1</td>
                            <td>셀 목록 내용#2</td>
                            <td>셀 목록 내용#3</td>
                            <td>셀 목록 내용#4</td>
                          </tr>
                          <tr>
                            <td class="text-left">셀 목록 내용#0</td>
                            <td>셀 목록 내용#1</td>
                            <td>셀 목록 내용#2</td>
                            <td>셀 목록 내용#3</td>
                            <td>셀 목록 내용#4</td>
                          </tr>
                          <tr>
                            <td class="text-left">셀 목록 내용#0</td>
                            <td>셀 목록 내용#1</td>
                            <td>셀 목록 내용#2</td>
                            <td>셀 목록 내용#3</td>
                            <td>셀 목록 내용#4</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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
export default {
  name: "SchemaLayout",
  data() {
    return {
      pageTitle: "스키마 화면 레이아웃",

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
};
</script>
