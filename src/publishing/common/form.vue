<template>
  <div ref="comlist">
    <section>
      <div class="container">
        <div class="row">
          <h2>1. 기본형</h2>
          <div class="content">
            <h3>기본 입력필드</h3>
            <div class="alert">
              <ul class="list-group">
                <li class="list-group-item"><b>TYPE : </b> text, email, number, tel, search, password</li>
                <li class="list-group-item"><b>Feedback field 활성화 : </b> .valid, .invalid클래스를 갖는 메시지 출력 영역은
                  input요소에 정의된 :state속성값에 의해 활성화된다.
                </li>
              </ul>
            </div>

            <div class="d-grid grid-col-2">
              <b-form-group label="이름" label-for="field-label-name" description="설명글을 출력합시다.">
                <b-form-input
                    id="field-label-name"
                    type="text"
                    v-model="myData.field_model.item1"
                    autocomplete="off"
                    placeholder="나의 이름"
                    :state=true
                >
                </b-form-input>
                <span class="valid-feedback">성공 문구 출력</span>
                <span class="invalid-feedback">에러 문구 출력</span>
              </b-form-group>

              <b-form-group label="너의 이름" label-for="field-label-name-2" description="">
                <b-form-input
                    id="field-label-name-2"
                    type="text"
                    v-model="myData.field_model.item1"
                    autocomplete="off"
                    placeholder="나의 이름"
                    :state=false
                >
                </b-form-input>
                <span class="valid-feedback">성공 문구 출력</span>
                <span class="invalid-feedback">에러 문구 출력</span>
              </b-form-group>

              <b-form-group label="권한 (읽기 전용)" label-for="field-label-readonly" description="">
                <b-form-input
                    id="field-label-readonly"
                    type="text"
                    autocomplete="off"
                    readonly
                    value="읽기 전용 값"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group label="Disabled (전송불가, 노출 전용)" label-for="field-label-disabled" description="">
                <b-form-input
                    id="field-label-disabled"
                    type="text"
                    autocomplete="off"
                    disabled
                    value="읽기 전용 값"
                >
                </b-form-input>
              </b-form-group>
            </div>

            <h3>체크박스 / 라디오 버튼</h3>
            <div class="d-grid grid-col-2">
              <div class="custom-group">
                <span class="form-label">싱글 라디오</span>
                <b-form-radio
                    v-model="myData.radio.selected"
                    name="radio-name-0"
                    value="라디오0"
                    unchecked-value="not_accepted"
                >
                  싱글 라디오 #1
                </b-form-radio>
                <b-form-radio
                    v-model="myData.radio.selected"
                    name="radio-name-0"
                    value="라디오1"
                >
                  싱글 라디오 #2
                </b-form-radio>
              </div>

              <div class="custom-group">
                <span class="form-label">싱글 체크박스</span>
                <b-form-checkbox
                    v-model="myData.checkbox.selected"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                >
                  싱글 체크박스
                </b-form-checkbox>
              </div>
              <div class="custom-group">
                <span class="form-label">라디오 그룹 타입</span>
                <b-form-radio-group v-model="myData.radio.selected" :options="myData.radio.options"
                                    class="custom-control-group"></b-form-radio-group>
              </div>

              <div class="custom-group">
                <span class="form-label">체크박스 그룹 타입</span>
                <b-form-checkbox-group
                    v-model="myData.checkbox.selected"
                    :options="myData.checkbox.options"
                    class="custom-control-group"
                ></b-form-checkbox-group>
              </div>
            </div>

            <h3>시스템 셀렉트 박스</h3>
            <div class="d-grid grid-col-2">
              <div class="form-group">
                <span class="form-label">시스템 셀렉트</span>
                <b-form-select id="system-select" :state="true" v-model="myData.select.selected"
                               :options="myData.select.plainOption"></b-form-select>
                <span class="valid-feedback">성공 메시지 출력</span>
                <span class="invalid-feedback">에러 메시지 출력</span>
              </div>

              <div class="custom-group">
                <span class="form-label">시스템 셀렉트 2컬럼 배열</span>
                <div class="form-inline col-half">
                  <div class="form-group">
                    <b-form-select v-model="myData.select.selected"
                                   :options="myData.select.plainOption"></b-form-select>
                  </div>
                  <div class="form-group">
                    <b-form-select v-model="myData.select.selected"
                                   :options="myData.select.plainOption"></b-form-select>
                  </div>
                </div>
              </div>
            </div>

            <h3>커스텀 셀렉트박스(플러그인)</h3>
            <ul class="list-group">
              <li><b>도큐먼트: </b><a target="_blank" href="https://vue-multiselect.js.org/#sub-single-select">https://vue-multiselect.js.org/#sub-single-select</a>
              </li>
            </ul>
            <div class="d-grid grid-col-2">
              <div class="form-group">
                <span class="form-label">값 변경 셀렉트</span>
                <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true"
                             :show-labels="false" placeholder="Pick a value"></multiselect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <h2>2. 인라인형</h2>
          <div class="content">
            <h3>그룹</h3>
            <form-group label-for="레이블22222" inline>
              <input-field placeholder="인라인형 텍스트 필드"></input-field>
            </form-group>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <h2>2. 선택</h2>
          <div class="content">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import tocLink from "../mixins/mixin_tocLink.js";
import Multiselect from "vue-multiselect";

export default {
  name: "ui-form",
  components: {
    Multiselect,
  },
  mixins: [tocLink],
  data() {
    return {
      frameData: {
        pageTitle: "Form 컴포넌트",
        tocData: [],
      },
      myData: {
        field_model: {
          item1: "홍길동",
          item2: "required 속성 적용",
          item3: "readonly 속성 적용",
          item4: "disabled 속성 적용",
        },
        radio: {
          selected: "first",
          options: [
            { text: "옵션#1", value: "1", },
            { text: "옵션#2", value: "2", },
            { text: "옵션 옵션 #3", value: "3", },
            { text: "옵션#4", value: "4", },
            { text: "옵션옵션옵션#5", value: "5", },
            { text: "옵션#6", value: "6", }
          ],
        },
        checkbox: {
          selected: [],
          options: [
            { text: "Orange", value: "orange", },
            { text: "Apple", value: "apple", },
            { text: "Pineapple Pineapple", value: "pineapple", },
            { text: "Grape", value: "grape", }
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
      value: null,
      options: ["list", "of", "options"],
    };
  },
  mounted() {
    this.$emit("updateStatus", this.frameData);
  },
  beforeDestroy() {

  },
  methods: {
    onSubmit() {
      console.log("onSubmit==>", JSON.stringify(this.myData));
    },
    changeValue(val) {
      console.log("changeValue", val);
      this.myData.field_model1 = val;
    },
    doEvent() {
      console.log("자식--> 부모에게 이벤트 쏨");
    },
  },
};
</script>