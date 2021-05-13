<template>
  <div ref="comlist">
    <section>
      <div class="container">
        <div class="row">
          <h2>1. 기본형</h2>
          <div class="content">
            <div class="alert">
              <ul class="list-group">
                <li class="list-group-item"><b>TYPE : </b> text, email, number, tel, search, password</li>
                <li class="list-group-item"><b>Feedback field 활성화 : </b> .valid, .invalid클래스를 갖는 메시지 출력 영역은
                  input요소에 정의된 :state속성값에 의해 활성화된다.
                </li>
              </ul>
            </div>

            <h3>기본 입력필드</h3>
            <div class="d-grid grid-col-2">
              <b-form-group valid-feedback="validate 성공적일때 출력" label="이름" label-for="field-label-name"
                            description="설명글을 출력합시다.">
                <b-form-input
                    id="field-label-name"
                    type="text"
                    v-model="myData.field_model.item1"
                    autocomplete="off"
                    placeholder="나의 이름"
                    :state="true"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group invalid-feedback="validate 실패일때 출력" label="너의 이름" label-for="field-label-name-2"
                            description="">
                <b-form-input
                    id="field-label-name-2"
                    type="text"
                    v-model="myData.field_model.item1"
                    autocomplete="off"
                    placeholder="나의 이름"
                    :state="false"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group label="권한 (읽기 전용)" label-for="field-label-readonly" description="설명글">
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
              <div class="form-group">
                <span class="form-label">라디오 싱글</span>
                <b-form-radio
                    v-model="myData.radio.selected"
                    name="radio-name-0"
                    value="라디오0"
                    unchecked-value="not_accepted"
                >
                  싱글 라디오 #1
                </b-form-radio>
              </div>

              <div class="form-group">
                <span class="form-label">체크박스 싱글</span>
                <b-form-checkbox
                    v-model="myData.checkbox.selected"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                >
                  싱글 체크박스
                </b-form-checkbox>
              </div>

              <div class="form-group">
                <span class="form-label">라디오 그룹 가로형(기본)</span>
                <b-form-radio-group
                    v-model="myData.radio.selected"
                    :options="myData.radio.options"
                ></b-form-radio-group>
              </div>

              <div class="form-group">
                <span class="form-label">체크박스 그룹 가로형(기본)</span>
                <b-form-checkbox-group
                    v-model="myData.checkbox.selected"
                    :options="myData.checkbox.options"
                ></b-form-checkbox-group>
              </div>

              <div class="form-group">
                <span class="form-label">라디오 그룹 세로형</span>
                <b-form-radio-group
                    v-model="myData.radio.selected"
                    :options="myData.radio.options"
                    stacked
                ></b-form-radio-group>
              </div>

              <div class="form-group">
                <span class="form-label">체크박스 그룹 세로형</span>
                <b-form-checkbox-group
                    v-model="myData.checkbox.selected"
                    :options="myData.checkbox.options"
                    stacked
                ></b-form-checkbox-group>
              </div>
            </div>

            <h3>시스템 셀렉트 박스</h3>
            <div class="d-grid grid-col-2">
              <!-- HTML 템플릿 영역 -->
              <b-form-group valid-feedback="validate 성공적일때 출력" label="시스템 셀렉트 싱글" label-for="system-select-label"
                            description="설명글">
                <b-form-select :state="true" v-model="myData.select.selected"
                               :options="myData.select.plainOption" id="system-select-label"></b-form-select>
              </b-form-group>

              <div class="form-inline-group">
                <b-form-group label="시스템 셀렉트 멀티1" label-for="system-select-label-0" description="">
                  <b-form-select v-model="myData.select.selected"
                                 :options="myData.select.plainOption" id="system-select-label-0"></b-form-select>
                </b-form-group>
                <b-form-group label="시스템 셀렉트 멀티2" label-for="system-select-label-1" description="">
                  <b-form-select v-model="myData.select.selected"
                                 :options="myData.select.plainOption" id="system-select-label-1"></b-form-select>
                </b-form-group>
              </div>
              <!-- // HTML 템플릿 영역 -->
            </div>
            <div class="d-grid grid-col-2">
              <!-- HTML 템플릿 영역 -->
              <div class="form-inline-group visible-first-label">
                <b-form-group label="첫번째만 라벨이 있는 경우" label-for="system-select-label-10" description="">
                  <b-form-select v-model="myData.select.selected"
                                 :options="myData.select.plainOption" id="system-select-label-10"></b-form-select>
                </b-form-group>
                <b-form-group label="시스템 셀렉트 멀티2" label-for="system-select-label-11" description="">
                  <b-form-select v-model="myData.select.selected"
                                 :options="myData.select.plainOption" id="system-select-label-11"></b-form-select>
                </b-form-group>
              </div>
              <!-- // HTML 템플릿 영역 -->
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
            <h3>인라인 그룹 1</h3>
            <div class="">
              <div class="form-inline-group form-label-inline">
                <b-form-group label="이름" label-for="inine-field-label-name">
                  <b-form-input
                      id="inine-field-label-name"
                      type="text"
                      v-model="myData.field_model.item1"
                      autocomplete="off"
                      placeholder="나의 이름"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group label="너의 이름" label-for="inine-field-label-name-2">
                  <b-form-input
                      id="inline-field-label-name-2"
                      type="text"
                      v-model="myData.field_model.item1"
                      autocomplete="off"
                      placeholder="나의 이름"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group label="인라인 셀렉트" label-for="inline-system-select-label">
                  <b-form-select v-model="myData.select.selected"
                                 :options="myData.select.plainOption" id="inline-system-select-label"></b-form-select>
                </b-form-group>
              </div>
            </div>

            <h3>인라인 그룹 2</h3>
            <div class="">
              <div class="form-inline-group form-label-inline">
                <div class="form-group">
                  <span class="form-label">라디오 그룹</span>
                  <b-form-radio-group
                      v-model="myData.radio.selected"
                      :options="myData.radio.options"
                  ></b-form-radio-group>
                </div>

                <div class="form-group">
                  <span class="form-label">체크박스 그룹</span>
                  <b-form-checkbox-group
                      v-model="myData.checkbox.selected"
                      :options="myData.checkbox.options"
                  ></b-form-checkbox-group>
                </div>
              </div>

            </div>

            <h3>label 숨김 모드</h3>
            <div class="form-inline-group">
              <b-form-group label="이름" label-for="field-label-name" description="" label-sr-only>
                <b-form-input
                    id="field-label-name"
                    type="text"
                    autocomplete="off"
                    placeholder="나의 이름"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group label="시스템 셀렉트 싱글" label-for="system-select-nolabel" label-sr-only>
                <b-form-select :state="true" v-model="myData.select.selected"
                               :options="myData.select.plainOption" id="system-select-nolabel"></b-form-select>
              </b-form-group>
            </div>
            <p class="block-feedback">
              <small class="valid-feedback" style="display: block">Validation 값이 성공일때 메시지</small>
              <small class="invalid-feedback" style="display: block">Validation 값이 실패일때 메시지</small>
            </p>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import tocLink from "../mixins/mixinTocLink.js";
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
            { text: "옵션#4", value: "4", disabled: true, }
          ],
        },
        checkbox: {
          selected: [],
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