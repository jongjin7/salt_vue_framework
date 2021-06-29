<template>
  <div class="custom-select" :class="size ? `select-${size}` : ''" ref="select">
    <s-button class="btn-select" outline :pill="pill" :size="size" :icon="selectIcons" @onClick="onToggle">
      {{ selected }}
    </s-button>
    <ul class="option-list">
      <li class="option-item" v-for="item in optionsData" :key="item.text">
        <a href="#"
           class="option-item-link"
           @click.prevent="onClick(item)"
           @keyup.33.34 = "moveOption"
           :class="{
            'placeholder': item.placeholder,
            'option-selected':item.selected,
            'disabled': item.disabled
           }">
          {{ item.text }}</a>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  props: {
    btnIcon:{
      type: String,
    },
    options: {
      type: Array,
    },
    pill: {
      type: Boolean,
    },
    size: {
      type: String,
    },
  },
  data() {
    return {
      selectBox: "",
      selectOptionList:"",
      selected: "",
      optionsData: "",
      selectIcons:"",
    };
  },
  computed:{

  },
  created() {
    this.setIcon();
  },
  mounted() {
    this.init();
  },
  methods: {
    setIcon() {
      let def = { right: "arrow", };
      this.selectIcons = this.btnIcon ? { left: this.btnIcon, ...def, } : def;
    },
    init() {
      this.selectBox = this.$refs.select;
      this.selectOptions = this.selectBox.querySelector(".option-list");
      const hasSelectedItem = this.options.some((item) => item.selected);
      this.optionsData = this.options.map((item) => {
        if (item.value === null) {
          this.selected = !hasSelectedItem ? item.text : "";
          return { ...item, placeholder: true, };
        } else {
          if (item.selected) this.selected = item.text;
          return item;
        }
      });
      // console.log("this.optionsData", this.optionsData);
    },

    hide() {
      console.log("hide!!!!!!");
      this.selectOptions.classList.remove("fade-in");
      this.selectOptions.addEventListener("transitionend", () => {
        this.selectBox.classList.remove("select-active");
      });
      document.removeEventListener("click", this.onClickDocument);
    },

    onClickDocument(e) {
      if(e.target.closest(".custom-select") === null) {
        this.hide();
      }
    },
    onToggle() {
      console.log("onToggle!");
      document.addEventListener("click", this.onClickDocument);
      if (!this.selectBox.classList.contains("select-active")) {
        if(document.querySelectorAll(".custom-select.select-active").length > 0) {
          document.querySelectorAll(".custom-select.select-active").forEach((item)=>{
            item.classList.remove("select-active");
            item.querySelector(".option-list").classList.remove("fade-in");
          });
        }
        this.selectBox.classList.add("select-active");
        this.selectOptions.classList.add("fade-in");
      }else{
        this.hide();
      }
    },

    onClick(option) {
      if(option.disabled || option.value === null) return false;
      this.selected = option.text;
      this.changeOption(option);
      this.hide();
      this.$emit("onChange", option.value);
    },

    changeOption(option) {
      this.optionsData.forEach((item) => item.selected = false);
      option.selected = true;
    },

    moveOption() {

      console.log("키보드 키 이동");
    },
  },
};
</script>
