<template>
  <div ref="comlist">
    <section>
      <div class="container">
        <div class="row">
          <h2>1. 리스트</h2>
          <div class="content">
            <h3>기본형 테이블</h3>
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

            <h3>체크박스, 라디오가 포함된 테이블</h3>
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
    <section>
      <div class="container">
        <div class="row">
          <h2>2. 상세페이지</h2>
          <div class="content">
            <h3>목록(dl태그)</h3>
            <dl class="table table-datatable dl-detail">
              <dt>서비스 아이디</dt>
              <dd>#내용출력_셀은 짝수출력</dd>
              <dt>모델명</dt>
              <dd>#내용출력_셀은 짝수출력</dd>
              <dt>이름</dt>
              <dd><input value="유저1" type="text" class="form-control" /></dd>
              <dt>권한</dt>
              <dd>
                <b-form-select :state="true" v-model="myData.select.selected"
                               :options="myData.select.options" id="system-select-label"></b-form-select>
              </dd>
              <dt>와이드컬럼</dt>
              <dd class="wide-column">#내용출력_셀은 짝수출력</dd>
              <dt>등록자</dt>
              <dd>#내용출력_셀은 짝수출력</dd>
              <dt>셀안에 목록</dt>
              <dd>
                <ul class="cell-list">
                  <li><b>제목글: </b>첫행 리스트 첫행 리스트첫행 리스트첫행 리스트첫행 리스트첫행 리스트첫행 리스트첫행 리스트첫행 리스트</li>
                  <li><b>제목글: </b>두번째행 리스트</li>
                </ul>
              </dd>
              <dt>데이터셋</dt>
              <dd class="wide-column">
                <div>
                  <router-link to="/" class="btn-box"><s-badge icon="global">링크버튼</s-badge></router-link>
                  <router-link to="/" class="btn-box"><s-badge icon="global">링크버튼</s-badge></router-link>
                  <router-link to="/" class="btn-box"><s-badge icon="global">링크버튼</s-badge></router-link>
                  <router-link to="/" class="btn-box"><s-badge icon="global">링크버튼</s-badge></router-link>
                </div>
              </dd>
              <dt>등록자</dt>
              <dd>#내용출력_셀은 짝수출력</dd>
              <dt></dt>
              <dd></dd>
            </dl>


            <h3>데이터 그리드</h3>
            <table role="grid" class="table table-datatable table-grid text-center">
              <thead>
              <tr>
                <th>학습 데이터 이름</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-left">
                  다중으로 내용이 노출될때 다중으로 내용이 노출될때다중으로 내용이 노출될때다중으로 내용이 노출될때다중으로 내용이 노출될때다중으로 내용이 노출될때 다중으로 내용이 노출될때다중으로
                  내용이 노출될때다중으로 내용이 노출될때다중으로 내용이 노출될때다중으로 내용이 노출될때다중으로 내용이 노출될때다중으로 내용이 노출될때
                </td>
              </tr>
              <tr>
                <td class="text-left">어머니, 오늘 온 노동신문에 아버지와 우리 가정에 대한 기사가 실렸습니다.</td>
              </tr>
              <tr>
                <td class="text-left">다중으로 내용이 노출될때 다중으로 내용이 될때다중으로 내용이 노출될때</td>
              </tr>
              </tbody>
            </table>

            <!-- 페이지네이션 -->
            <div class="pagination-content">
              <div class="page-count">
                <span>총</span>
                <strong>1003</strong>
                <span>건</span>
              </div>
              <b-pagination pills align="center" :hide-goto-end-buttons="true" v-model="currentPage" :total-rows="100"></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import tocLink from "@/publishing/pub-only/mixinTocLink";

export default {
  name: "pubTable",
  mixins: [tocLink],
  data() {
    return {
      frameData: {
        pageTitle: "테이블 컴포넌트",
        tocData: [],
      },

      currentPage:1,

      myData:{
        select: {
          selected: null,
          options: [
            { value: null, text: "Please select an option", },
            { value: "a", text: "This is First option", },
            { value: "b", text: "Selected Option", },
            { value: { C: "3PO", }, text: "This is an option with object value", },
            { value: "d", text: "This one is disabled", disabled: true, }
          ],
        },
      },
    };
  },
  mounted() {
    this.$emit("updateStatus", this.frameData);
  },
};
</script>