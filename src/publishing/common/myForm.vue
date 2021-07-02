<template>
  <div class="page-body-contents" ref="comlist">
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
              <div class="" style="width: 50%;">
                <s-form-group  class="s-form-group" description="">
                  <s-input-field v-model="myData.field_model1" label="라벨 제목" label-for="label-011" placeholder="내용을 입력하세요" class="afdsfdsfdf"></s-input-field>
                </s-form-group>
                <s-form-group  class="s-form-group" description="">
                  <s-input-field v-model="myData.field_model1" label="라벨 제목" label-for="label-012" placeholder="내용을 입력하세요" class="afdsfdsfdf"></s-input-field>
                </s-form-group>
              </div>

              <div class="form-label-inline" style="width:50%">
                <s-form-group class="s-form-group" description="">
                  <s-input-field v-model="myData.field_model2" label="라벨 제목 1" label-for="label-1-1" placeholder="내용을 입력하세요"></s-input-field>
                </s-form-group>

                <s-form-group class="s-form-group" description="">
                  <s-input-field v-model="myData.field_model2" label="라벨 제목 2" label-for="label-1-2" placeholder="내용을 입력하세요"></s-input-field>
                </s-form-group>
              </div>

              <div class="form-inline-group form-label-inline">
                <s-form-group class="s-form-group" description="">
                  <s-input-field v-model="myData.field_model2" label="라벨 제목 1" label-for="label-2-1" placeholder="내용을 입력하세요"></s-input-field>
                </s-form-group>

                <s-form-group class="s-form-group" description="">
                  <s-input-field v-model="myData.field_model2" label="라벨 제목 2" label-for="label-2-2" placeholder="내용을 입력하세요"></s-input-field>
                </s-form-group>
              </div>

              <div class="btn-wrap">
                <s-button type="reset" color="">취소</s-button>
                <s-button type="submit" color="dark">승인</s-button>
              </div>
            </form>

            <h3>로그인 입력필드(확장형)</h3>
            <div style="width:400px;">
              <div>
                <s-form-group class="s-login">
                  <s-input-field v-model="myData.field_model1" label="라벨 제목" label-for="login-label-11" placeholder="내용을 입력하세요" class="afdsfdsfdf"></s-input-field>
                </s-form-group>

                <s-form-group class="s-login">
                  <s-input-field v-model="myData.field_model1" label="라벨 제목" label-for="login-label-12" placeholder="내용을 입력하세요" class="afdsfdsfdf"></s-input-field>
                </s-form-group>
              </div>
            </div>


            <h3>커스텀 셀렉트박스</h3>
            <s-custom-select @onChange ="onChangeSelect" :options="[{text:'한국어', value:'kr', selected: true},{text:'일본어', value:'jp', },{text:'영어', value:'en'}]"></s-custom-select>
            <s-custom-select @onChange ="onChangeSelect" size="lg" :options="[{text:'한국어', value:'kr', selected: true},{text:'일본어', value:'jp', },{text:'영어', value:'en'}]"></s-custom-select>
            <s-custom-select pill size="lg" btnIcon="global" @onChange="onChangeSelect" :options="[{text:'한국어', value:'kr', selected: true},{text:'일본어', value:'jp', disabled: true},{text:'영어', value:'en'}]"></s-custom-select>


            <s-form-group class="s-form-group" label="또다른 라벨 제목" description="설명글">
              <s-input-field v-model="myData.field_model3" :placeholder="'내용을 입력하세요'" name="item1"></s-input-field>
<!--              <span v-show="!validateState('item1')" class="invalid-feedback">{{ veeErrors.first("item1") }}</span>-->
            </s-form-group>
            <blockquote>
              <p>1번 인풋 값: {{ myData.field_model1 }}</p>
              <p>2번 인풋 값: {{ myData.field_model2 }}</p>
              <p>3번 인풋 값: {{ myData.field_model3 }}</p>
            </blockquote>


            <s-form-group class="s-form-group" description="설명글을 입력합시다.">
              <s-input-field type="email" placeholder="이메일용 인풋필드"></s-input-field>
            </s-form-group>



          </div>

        </div>
      </div>
    </section>


  </div>
</template>
<script>
import tocLink from "../pub-only/mixinTocLink.js";
export default {
  name: "my-ui-form",
  components:{
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
    this.$eventBus.guideTitleToc(this.frameData);
  },
  beforeDestroy() {

  },
  methods:{
    onSubmit() {
      console.log("onSubmit==>", JSON.stringify(this.myData));
    },

    onChangeSelect(value) {
      console.log("값 변경: ==>", value);
    },
  },
};
</script>
