<template>
  <div class="page-body-contents" ref="comlist">
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
            <h4>기본</h4>
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
            <h4 style="margin-top:12px;">인라인형</h4>
            <div class="d-grid grid-col-2">
              <div class="form-label-inline">
                <b-form-group label="이름" label-for="field-label-name" description="">
                  <b-form-input
                      id="field-label-name-21"
                      type="text"
                      v-model="myData.field_model.item1"
                      autocomplete="off"
                      placeholder="나의 이름"
                      :state="true"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group label="너의 이름" label-for="field-label-name-2" description="">
                  <b-form-input
                      id="field-label-name-22"
                      type="text"
                      v-model="myData.field_model.item1"
                      autocomplete="off"
                      placeholder="나의 이름"
                      :state="false"
                  >
                  </b-form-input>
                </b-form-group>
              </div>
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

              <div class="form-group" style="margin-top: 16px;">
                <span class="form-label">라디오 그룹 가로형(기본)</span>
                <b-form-radio-group
                    v-model="myData.radio.selected"
                    :options="myData.radio.options"
                ></b-form-radio-group>
              </div>

              <div class="form-group" style="margin-top: 16px;">
                <span class="form-label">체크박스 그룹 가로형(기본)</span>
                <b-form-checkbox-group
                    v-model="myData.checkbox.selected"
                    :options="myData.checkbox.options"
                ></b-form-checkbox-group>
              </div>

              <div class="form-group" style="margin-top: 16px;">
                <span class="form-label">라디오 그룹 세로형</span>
                <b-form-radio-group
                    v-model="myData.radio.selected"
                    :options="myData.radio.options"
                    stacked
                ></b-form-radio-group>
              </div>

              <div class="form-group" style="margin-top: 16px;">
                <span class="form-label">체크박스 그룹 세로형</span>
                <b-form-checkbox-group
                    v-model="myData.checkbox.selected"
                    :options="myData.checkbox.options"
                    stacked
                ></b-form-checkbox-group>
              </div>

              <div class="form-group" style="margin-top: 16px;">
                <span class="form-label">스위치(라디오 변형)</span>
                <b-form-checkbox-group
                    v-model="myData.checkbox.selected_sw"
                    :options="myData.checkbox.options"
                    switches
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
            <div class="alert">
              <p><b>도큐먼트: </b><a target="_blank" href="https://vue-multiselect.js.org/#sub-single-select">https://vue-multiselect.js.org/#sub-single-select</a>
              </p>
            </div>
            <div class="d-grid grid-col-2">
              <div class="form-group">
                <span class="form-label">값 변경 셀렉트</span>
                <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true"
                             :show-labels="false" placeholder="Pick a value"></multiselect>
              </div>
            </div>

            <h3>캘린더 플러그인</h3>
            <div class="alert">
              <!-- <p><b>도큐먼트: </b><a target="_blank" href="https://vcalendar.io/">V-Calendar https://vcalendar.io</a>-->
              <p><b>도큐먼트: </b><a target="_blank" href="https://innologica.github.io/vue2-daterange-picker">레인지 캘린더 레퍼런스
                사이트</a>
              </p>
            </div>
            <!--            <div class="d-grid grid-col-2">
                          <div class="form-group">
                            <span class="form-label">캘린더</span>
                             <v-date-picker v-model="calendarSelectedDate" mode="dateTime" is24hr>
                              <template #default="{ inputValue, inputEvents }">
                                <input
                                    class="form-control focus:outline-none focus:border-blue-300"
                                    :value="inputValue"
                                    v-on="inputEvents"
                                />
                              </template>
                            </v-date-picker>
                          </div>

                          <div class="form-group">
                            <span class="form-label">특수한 캘린더</span>
                            <div>
                              <div v-if="mode !== 'date'">
                                <div class="custom-control custom-control-inline custom-radio">
                                  <input type="radio" class="custom-control-input" value="" v-model="timezone">
                                  <label class="custom-control-label">Local</label>
                                </div>
                                <div class="custom-control custom-control-inline custom-radio">
                                  <input type="radio" class="custom-control-input" value="utc" v-model="timezone">
                                  <label class="custom-control-label">UTC</label>
                                </div>
                              </div>
                              <v-date-picker mode="time" v-model="calendarSelectedDate" :timezone="timezone"/>
                              <div class="flex items-baseline mt-2">
                                <span class="text-gray-600 font-semibold tracking-wide">Date (ISO):</span>
                                <span class="text-gray-800 ml-2">{{ calendarSelectedDate.toISOString() }}</span>
                              </div>
                            </div>
                          </div>
                        </div>-->
            <div class="d-grid grid-col-2">
              <div class="form-group">
                <span class="form-label">기간 캘린더 Type1</span>
                <!--                <v-date-picker v-model="range" is-range>
                                  <template v-slot="{ inputValue, inputEvents }">
                                    <div class="flex justify-center items-center">
                                      <input
                                          :value="inputValue.start"
                                          v-on="inputEvents.start"
                                          class="form-control"
                                          style="width: 200px;"
                                      />
                                      ~
                                      <input
                                          :value="inputValue.end"
                                          v-on="inputEvents.end"
                                          class="form-control"
                                          style="width: 200px;"
                                      />
                                    </div>
                                  </template>
                                </v-date-picker>-->

                <date-range-picker
                    :date-format="dateFormat"
                    :locale-data="{
                      firstDay: 0,
                      format: 'yyyy/mm/dd',
                      applyLabel: '적용',
                      cancelLabel: '취소',
                      }"
                    v-model="myData.calendarSelectedDate"
                >
                </date-range-picker>
              </div>

              <div class="form-group">
                <span class="form-label">기간 캘린더 Type2</span>
                <date-range-picker
                    :date-format="dateFormat"
                    auto-apply
                    :locale-data="{format: 'yyyy/mm/dd',}"
                    :ranges="false"
                    single-date-picker
                    v-model="myData.calendarSelectedDateSingle1"
                >
                </date-range-picker>
                ~
                <date-range-picker
                    :date-format="dateFormat"
                    auto-apply
                    :locale-data="{format: 'yyyy/mm/dd',}"
                    :ranges="false"
                    single-date-picker
                    @update="showTime(this)"
                    v-model="myData.calendarSelectedDateSingle1"
                >
                </date-range-picker>
              </div>
            </div>

            <h3>Large Type</h3>
            <div class="d-grid grid-col-2">
              <b-form-group
                  valid-feedback="validate 성공적일때 출력" label="이름" label-for="field-label-name"
                  description="설명글을 출력합시다.">
                <b-form-input
                    id="field-label-name"
                    type="text"
                    class="size-lg"
                    v-model="myData.field_model.item1"
                    autocomplete="off"
                    placeholder="나의 이름"
                    :state="true"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                  invalid-feedback="validate 실패일때 출력" label="너의 이름" label-for="field-label-name-2"
                  description="">
                <b-form-input
                    id="field-label-name-2"
                    type="text"
                    class="size-lg"
                    v-model="myData.field_model.item1"
                    autocomplete="off"
                    placeholder="나의 이름"
                    :state="false"
                >
                </b-form-input>
              </b-form-group>
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

              <div class="form-inline-group form-label-inline" style="margin-top:8px">
                <b-form-group
                    class="size-lg"
                    label="이름" label-for="s-field-label-name">
                  <b-form-input
                      id="s-field-label-name"
                      type="text"
                      v-model="myData.field_model.item1"
                      autocomplete="off"
                      placeholder="나의 이름"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group
                    class="size-lg"
                    label="너의 이름" label-for="s-field-label-name-2">
                  <b-form-input
                      id="s-field-label-name-2"
                      type="text"
                      v-model="myData.field_model.item1"
                      autocomplete="off"
                      placeholder="나의 이름"
                  >
                  </b-form-input>
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
                <b-form-select :state="null" v-model="myData.select.selected"
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
import tocLink from "../pub-only/mixinTocLink.js";
import Multiselect from "vue-multiselect";

export default {
  name: "ui-form",
  components: {
    Multiselect,
  },
  mixins: [tocLink],
  watch:{

  },
  data() {
    return {
      frameData: {
        pageTitle: "Form 컴포넌트",
        tocData: [],
      },
      myData: {
        calendarSelectedDate: {
          startDate: "2021-6-26",
          endDate: "2021-7-2",
        },
        calendarSelectedDateSingle1: {
          startDate: null,
          endDate: null,
        },
        calendarSelectedDateSingle2: {
          startDate: null,
          endDate: null,
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
      value: null,
      options: ["list", "of", "options"],
      mode: "date",
      calendarSelectedDate: new Date(),
      timezone: "",
      range: {
        start: new Date(2020, 9, 12),
        end: new Date(2020, 9, 16),
      },
    };
  },
  mounted() {
    this.$eventBus.guideTitleToc(this.frameData);
  },
  beforeDestroy() {

  },
  methods: {
    showTime() {
      console.log(this);
    },
    dateFormat(classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date();
      }
      return classes;
    },
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
