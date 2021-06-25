<template>
  <div class="custom-select" ref="select">
    <s-button pill outline :icon="{left:'global', right:'arrow'}" class="type-pill" @onClick="onShow">
      {{ selected }}
    </s-button>
    <ul class="opt-list">
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
    options: {
      type: Array,
    },
  },
  data() {
    return {
      selectBox: "",
      selectOptionList:"",
      selected: "",
      optionsData: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.selectBox = this.$refs.select;
      this.selectOptions = this.selectBox.querySelector(".opt-list");
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
      console.log("eeeeeee", e.target.closest(".custom-select"));
      if(e.target.closest(".custom-select") === null) {
        this.hide();
      }
    },
    onShow() {
      console.log("onShow!");
      document.addEventListener("click", this.onClickDocument);
      if (!this.selectBox.classList.contains("select-active")) {
        this.selectBox.classList.add("select-active");
        this.selectOptions.classList.add("fade-in");
        // setTimeout(() => {
        //   this.selectOptions.addEventListener("transitionend", ()=> {
        //     console.log("option showing");
        //   });
        // }, 0);
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
