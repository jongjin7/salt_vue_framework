<template>
  <div class="page-body-contents">
    <div class="control-group stacked">
      <div class="container">
        <div class="row">
          <div class="lft-cont">
            <div class="form-inline-group">
              <b-form-group label="이름" label-for="inline-system-select-label-0" label-sr-only>
                <b-form-select v-model="myData.select.selected"
                               :options="myData.select.plainOption" id="inline-system-select-label-0"></b-form-select>
              </b-form-group>

              <b-form-group label="너의 이름" label-for="inine-field-label-name-2" label-sr-only>
                <b-form-input
                    id="inline-field-label-name-2"
                    type="text"
                    v-model="myData.field_model.item1"
                    autocomplete="off"
                    placeholder="나의 이름"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group label="인라인 셀렉트" label-for="inline-system-select-label" label-sr-only>
                <b-form-select v-model="myData.select.selected"
                               :options="myData.select.plainOption" id="inline-system-select-label"></b-form-select>
              </b-form-group>
              <div class="btn-wrap">
                <s-button>검색필터</s-button>
              </div>
            </div>
          </div>
          <div class="rgt-cont">
            <div class="form-inline-group">
              <span class="form-label">적용 필터 :</span>
              <div class="form-group">
                <span class="form-label sr-only">캘린더</span>
                <date-range-picker
                    :date-format="dateFormat"
                    v-model="myData.calendarSelectedDate"
                >
                </date-range-picker>
              </div>
              <b-form-group
                  label="너의 이름" label-for="s-field-label-name-2" label-sr-only>
                <b-form-input
                    id="s-field-label-name-2"
                    type="text"
                    v-model="myData.field_model.item1"
                    autocomplete="off"
                    placeholder="나의 이름"
                >
                </b-form-input>
              </b-form-group>
              <div class="btn-wrap">
                <s-button>검색필터</s-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="container sec-page">
        <div class="row">
          <div class="content">
            <div class="title-action-area">
              <div class="lft-cont">
                <h3>기본형 테이블</h3>
              </div>
              <div class="rgt-cont">
                <div class="btn-wrap">
                  <s-button>버튼1</s-button>
                  <s-button>버튼2</s-button>
                  <s-button>버튼3</s-button>
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
      </div>

      <div class="container sec-page">
        <div class="row">
          <div class="content">
            <div class="title-action-area">
              <div class="lft-cont">
                <h3>기본형 테이블</h3>
              </div>
              <div class="rgt-cont">
                <div class="btn-wrap">
                  <s-button>버튼1</s-button>
                  <s-button>버튼2</s-button>
                  <s-button>버튼3</s-button>
                </div>
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
                <td>
                  <b-form-checkbox class="none-label"></b-form-checkbox>
                </td>
                <td class="text-left">셀 목록 내용#1</td>
                <td>셀 목록 내용#2</td>
                <td>셀 목록 내용#3</td>
                <td>셀 목록 내용#4</td>
              </tr>
              <tr>
                <td>
                  <b-form-radio class="none-label"></b-form-radio>
                </td>
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
</template>

<script>
export default {
  name: "TemplateDetail",
  data() {
    return {
      pageTitle: "상세화면 기본 레이아웃",
      myData: {
        calendarSelectedDate: {
          startDate: "2019-12-26",
          endDate: "2022-12-28",
        },
        field_model: {
          item1: "홍길동",
          item2: "required 속성 적용",
          item3: "readonly 속성 적용",
          item4: "disabled 속성 적용",
        },
        radio: {
          selected: [],
          options: [
            { text: "옵션#1", value: "1", },
            { text: "옵션#2", value: "2", },
            { text: "옵션 옵션 #3", value: "3", },
            { text: "옵션#4", value: "4", disabled: true, }
          ],
        },
        checkbox: {
          selected: ["apple"],
          selected_sw: ["orange"],
          options: [
            { text: "Orange", value: "orange", },
            { text: "Apple", value: "apple", },
            { text: "Pineapple Pineapple", value: "pineapple", },
            { text: "Grape", value: "grape", disabled: true, }
          ],
        },
        select: {
          selected: null,
          options: [
            { value: null, text: "Please select an option", },
            { value: "a", text: "This is First option", },
            { value: "b", text: "Selected Option", },
            { value: { C: "3PO", }, text: "This is an option with object value", },
            { value: "d", text: "This one is disabled", disabled: true, }
          ],
          plainOption: [
            { value: null, text: "선택하세요", },
            { value: "A", text: "Option A", },
            { value: "B", text: "Option BOption BOption BOption BOption BOption BOption BOption BOption B", },
            { value: "D", text: "Option C", notEnabled: true, },
            { value: { d: 1, }, text: "Option D", }
          ],
        },
      },
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
    dateFormat(classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date();
      }
      return classes;
    },
  },
};
</script>
