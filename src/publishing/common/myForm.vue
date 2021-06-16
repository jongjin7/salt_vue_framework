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
              </ul>
            </div>
            <form @submit.prevent="onSubmit" >
              <input-field v-b-tooltip title="어쩌라고~~~~" v-model="myData.field_model1" label="formGroup없는 인풋 라벨" placeholder="내용을 입력하세요" label-for="label-field-0"></input-field>

              <form-group description="">
                <input-field v-model="myData.field_model2" label="라벨 제목" label-for="label-1" placeholder="내용을 입력하세요" class="afdsfdsfdf"></input-field>
              </form-group>

              <button type="submit">승인</button>
            </form>

            <form-group label="또다른 라벨 제목" description="설명글">
              <input-field v-model="myData.field_model3" :placeholder="'내용을 입력하세요'" name="item1"></input-field>
<!--              <span v-show="!validateState('item1')" class="invalid-feedback">{{ veeErrors.first("item1") }}</span>-->
            </form-group>
            <blockquote>
              <p>1번 인풋 값: {{ myData.field_model1 }}</p>
              <p>2번 인풋 값: {{ myData.field_model2 }}</p>
              <p>3번 인풋 값: {{ myData.field_model3 }}</p>
            </blockquote>


            <form-group  description="설명글을 입력합시다.">
              <input-field type="email" placeholder="이메일용 인풋필드"></input-field>
            </form-group>



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
            <h3>커스텀 셀렉트박스(플러그인)</h3>
            ref: https://vue-multiselect.js.org/#sub-single-select
            <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
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
  name: "my-ui-form",
  components:{
    Multiselect,
  },
  mixins:[tocLink],
  data() {
    return{
      frameData:{
        pageTitle:"개발중인 Form 컴포넌트",
        tocData:[],
      },
      myData:{
        field_model1:"",
        field_model2:"",
        field_model3:"",
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
  methods:{
    onSubmit() {
      console.log("onSubmit==>", JSON.stringify(this.myData));
    },

  },
};
</script>