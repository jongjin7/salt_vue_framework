<template>
  <div class="page-body-contents" ref="comlist">
    <section>
      <div class="container">
        <div class="row">
          <h2>1. Color</h2>
          <div class="content">
            <h3>White & Black</h3>
            <ul class="color-list" style="margin-bottom:8px">
              <li v-for="(color, index) in new Array(11)" :key="index" :class="{dark: index > 4}">
                <span class="chip"
                      :class="`bg-${ index > 0 && index <= 9 ? `gray-${index*100}` : (index === 0? 'white' :'black') }`"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
            </ul>

            <ul class="color-list">
              <li>
                <span class="chip bg-default"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li>
                <span class="chip bg-light"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="dark">
                <span class="chip bg-dark"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
            </ul>


            <h3>Color Chips</h3>
            <h4>Main Colors</h4>
            <ul class="color-list">
              <li class="dark">
                <span class="chip bg-primary"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="">
                <span class="chip bg-primary-100"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="">
                <span class="chip bg-primary-200"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="dark">
                <span class="chip bg-primary-300"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>

              <li class="">
                <span class="chip bg-secondary"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="">
                <span class="chip bg-secondary-100"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="">
                <span class="chip bg-danger"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="">
                <span class="chip bg-danger-100"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="dark">
                <span class="chip bg-special"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
            </ul>
            <h4 style="margin-top: 8px;">Support Colors</h4>
            <ul class="color-list">
              <li class="dark">
                <span class="chip bg-success"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="">
                <span class="chip bg-warning"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
              <li class="dark">
                <span class="chip bg-info"></span>
                <span class="info-style">
                  <span class="class-name"></span>
                  <span class="color-value"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <h2>2. Typography</h2>
          <div class="content">
            <h3>Headings</h3>
            <ul class="font-list">
              <li><h1>h1. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h1><span class="info-style"><span class="size">64px</span><span
                  class="weight"></span></span></li>
              <li><h2>h2. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h2><span class="info-style"><span class="size">48px</span><span
                  class="weight"></span></span></li>
              <li><h3>h3. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h3><span class="info-style"><span class="size">32px</span><span
                  class="weight"></span></span></li>
              <li><h4>h4. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h4><span class="info-style"><span class="size">24px</span><span
                  class="weight"></span></span></li>
              <li><h5>h5. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h5><span class="info-style"><span class="size">18px</span><span
                  class="weight"></span></span></li>
              <li><h6>h6. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h6><span class="info-style"><span class="size">16px</span><span
                  class="weight"></span></span></li>
            </ul>

            <h3 style="margin-top:20px">Headings(Used class)</h3>
            <ul class="font-list">
              <li><p class="h1">h1. Saltlux 솔트룩스 제목</p><span class="info-style"><span class="size">64px</span><span
                  class="weight"></span></span></li>
              <li><p class="h2">h2. Saltlux 솔트룩스 제목</p><span class="info-style"><span class="size">48px</span><span
                  class="weight"></span></span></li>
              <li><p class="h3">h3. Saltlux 솔트룩스 제목</p><span class="info-style"><span class="size">32px</span><span
                  class="weight"></span></span></li>
              <li><p class="h4">h4. Saltlux 솔트룩스 제목</p><span class="info-style"><span class="size">24px</span><span
                  class="weight"></span></span></li>
              <li><p class="h5">h5. Saltlux 솔트룩스 제목</p><span class="info-style"><span class="size">18px</span><span
                  class="weight"></span></span></li>
              <li><p class="h6">h6. Saltlux 솔트룩스 제목</p><span class="info-style"><span class="size">16px</span><span
                  class="weight"></span></span></li>
            </ul>

            <h3 style="margin-top:20px">Display Headings</h3>
            <ul class="font-list">
              <li>
                <div class="display-1">Display 1</div>
                <span class="info-style"><span class="size">64px</span><span class="weight"></span></span></li>
              <li>
                <div class="display-2">Display 2</div>
                <span class="info-style"><span class="size">48px</span><span class="weight"></span></span></li>
              <li>
                <div class="display-3">Display 3</div>
                <span class="info-style"><span class="size">32px</span><span class="weight"></span></span></li>
            </ul>

            <h3 style="margin-top:20px">Lead</h3>
            <p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>

            <h3 style="margin-top:20px; margin-bottom:0px">Inline text elements</h3>
            <ul class="font-list text-element">
              <li>
                <p><span class="list-title">&lt;mark&gt;</span>
                  <span><span>You can use the mark tag to<mark>highlight</mark>text.</span></span>
                </p>
                <span class="info-style"><span class="size"></span><span class="weight"></span></span>
              </li>
              <li>
                <p><span class="list-title">&lt;del&gt;</span>
                  <span><del>This line of text is meant to be treated as deleted text.</del></span>
                </p>
                <span class="info-style"><span class="size"></span><span class="weight"></span></span>
              </li>
              <li>
                <p><span class="list-title">&lt;s&gt;</span><span><s>This line of text is meant to be treated as no longer
                accurate.</s></span></p>
                <span class="info-style"><span class="size"></span><span class="weight"></span></span>
              </li>
              <li>
                <p><span class="list-title">&lt;ins&gt;</span>
                  <span><ins>This line of text is meant to be treated as an addition to the document.</ins></span>
                </p>
                <span class="info-style"><span class="size"></span><span class="weight"></span></span>
              </li>
              <li>
                <p>
                  <span class="list-title">&lt;u&gt;</span>
                  <span><u>This line of text will render as underlined</u></span>
                </p>
                <span class="info-style"><span class="size"></span><span class="weight"></span></span>
              </li>
              <li>
                <p>
                  <span class="list-title">&lt;small&gt;</span>
                  <span><small>This line of text is meant to be treated as
                fine print.</small></span>
                </p>
                <span class="info-style"><span class="size"></span><span class="weight"></span></span>
              </li>
              <li>
                <p><span class="list-title">&lt;strong&gt;</span>
                  <span><strong>This line rendered as bold text.</strong></span>
                </p>
                <span class="info-style"><span class="size"></span><span class="weight"></span></span>
              </li>
              <li>
                <p><span class="list-title">&lt;em&gt;</span>
                  <span><em>This line rendered as italicized text.</em></span>
                </p>
                <span class="info-style"><span class="size"></span><span class="weight"></span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import tocLink from "@/publishing/pub-only/mixinTocLink";

export default {
  name: "Content",
  mixins: [tocLink],
  data() {
    return {
      frameData: {
        pageTitle: "기본 스타일",
        tocData: [],
      },

    };
  },
  created() {
    this.$eventBus.guideTitleToc(this.frameData);
  },
  mounted() {
    this.$nextTick(() => {
      this.insertInfoTextStyle();
      this.insertInfoColorStyle();
    });
  },
  methods: {
    insertInfoTextStyle() {
      let listItem = document.querySelectorAll(".font-list");

      listItem.forEach((item) => {
        item.querySelectorAll("li").forEach((childItem) => {
          if (childItem.querySelector(".size") === null) return false;
          // if(item.classList.contains("text-element")) console.log("aaaaa", childItem.childNodes[0].childNodes[0].nextElementSibling.childNodes[0], window.getComputedStyle(childItem.childNodes[0].childNodes[0].nextElementSibling.childNodes[0]).fontSize);
          let computedItem = window.getComputedStyle(item.classList.contains("text-element") ? childItem.childNodes[0].childNodes[0].nextElementSibling.childNodes[0] : childItem.childNodes[0]);
          // console.log("itemStyle: ", computedItem.fontSize, childItem.querySelector(".size"));
          childItem.querySelector(".size").innerText = computedItem.fontSize;
          childItem.querySelector(".weight").innerText = computedItem.fontWeight;
        });
      });
    },
    insertInfoColorStyle() {
      let listItem = document.querySelectorAll(".color-list");
      listItem.forEach((item) => {
        item.querySelectorAll("li").forEach((childItem) => {
          // console.log("chip:::", childItem.querySelector(".chip").className.match(/bg-\w*(-\w*)?$/g));
          childItem.querySelector(".class-name").innerText = childItem.querySelector(".chip").className.match(/bg-\w*(-\w*)?$/g)[0];
          childItem.querySelector(".color-value").innerText = rgbToHex(window.getComputedStyle(childItem.childNodes[0]).backgroundColor);
        });
      });

      function rgbToHex(rgbType) {
        /*
        ** 컬러값과 쉼표만 남기고 삭제하기.
        ** 쉼표(,)를 기준으로 분리해서, 배열에 담기.
        */
        var rgb = rgbType.replace(/[^%,.\d]/g, "").split(",");

        rgb.forEach(function(str, x, arr) {

          /* 컬러값이 "%"일 경우, 변환하기. */
          if (str.indexOf("%") > -1) str = Math.round(parseFloat(str) * 2.55);

          /* 16진수 문자로 변환하기. */
          str = parseInt(str, 10).toString(16);
          if (str.length === 1) str = "0" + str;

          arr[x] = str;
        });

        return "#" + rgb.join("");
      }
    },
  },
};
</script>
