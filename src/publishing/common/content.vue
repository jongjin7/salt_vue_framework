<template>
  <div ref="comlist">
    <section>
      <div class="container">
        <div class="row">
          <h2>1. Color</h2>
          <div class="content">
            <h3>White & Black</h3>
            <ul class="color-list">
              <li><span class="dark-gray"></span></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <h3>White & Black1</h3>
            <ul class="color-list">
              <li></li>
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
              <li><h1>h1. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h1><span class="name"><span class="size">64px</span><span class="weight">500</span></span></li>
              <li><h2>h2. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h2><span class="name"><span class="size">48px</span><span class="weight">500</span></span></li>
              <li><h3>h3. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h3><span class="name"><span class="size">32px</span><span class="weight">400</span></span></li>
              <li><h4>h4. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h4><span class="name"><span class="size">24px</span><span class="weight">400</span></span></li>
              <li><h5>h5. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h5><span class="name"><span class="size">18px</span><span class="weight">400</span></span></li>
              <li><h6>h6. Saltlux 솔트룩스 제목 | 1234567890!@#$%^&*()-=_+/?</h6><span class="name"><span class="size">16px</span><span class="weight">400</span></span></li>
            </ul>

            <h3 style="margin-top:20px">Headings(Used class)</h3>
            <ul class="font-list">
              <li><p class="h1">h1. Saltlux 솔트룩스 제목</p><span class="name"><span class="size">64px</span><span class="weight">500</span></span></li>
              <li><p class="h2">h2. Saltlux 솔트룩스 제목</p><span class="name"><span class="size">48px</span><span class="weight">500</span></span></li>
              <li><p class="h3">h3. Saltlux 솔트룩스 제목</p><span class="name"><span class="size">32px</span><span class="weight">400</span></span></li>
              <li><p class="h4">h4. Saltlux 솔트룩스 제목</p><span class="name"><span class="size">24px</span><span class="weight">400</span></span></li>
              <li><p class="h5">h5. Saltlux 솔트룩스 제목</p><span class="name"><span class="size">18px</span><span class="weight">400</span></span></li>
              <li><p class="h6">h6. Saltlux 솔트룩스 제목</p><span class="name"><span class="size">16px</span><span class="weight">400</span></span></li>
            </ul>

            <h3 style="margin-top:20px">Display Headings</h3>
            <ul class="font-list">
              <li><div class="display-1">Display 1</div><span class="name"><span class="size">64px</span><span class="weight">500</span></span></li>
              <li><div class="display-2">Display 2</div><span class="name"><span class="size">48px</span><span class="weight">500</span></span></li>
              <li><div class="display-3">Display 3</div><span class="name"><span class="size">32px</span><span class="weight">500</span></span></li>
            </ul>

            <h3 style="margin-top:20px">Lead</h3>
            <p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>

            <h3 style="margin-top:20px; margin-bottom:0px">Inline text elements</h3>
            <ul class="font-list">
              <li><p><span class="list-title">&lt;mark&gt;</span>You can use the mark tag to <mark>highlight</mark> text.</p></li>
              <li><p><span class="list-title">&lt;del&gt;</span><del>This line of text is meant to be treated as deleted text.</del></p></li>
              <li><p><span class="list-title">&lt;s&gt;</span><s>This line of text is meant to be treated as no longer accurate.</s></p></li>
              <li><p><span class="list-title">&lt;ins&gt;</span><ins>This line of text is meant to be treated as an addition to the document.</ins></p></li>
              <li><p><span class="list-title">&lt;u&gt;</span><u>This line of text will render as underlined</u></p></li>
              <li><p><span class="list-title">&lt;small&gt;</span><small>This line of text is meant to be treated as fine print.</small></p></li>
              <li><p><span class="list-title">&lt;strong&gt;</span><strong>This line rendered as bold text.</strong></p></li>
              <li><p><span class="list-title">&lt;em&gt;</span><em>This line rendered as italicized text.</em></p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import tocLink from "@/publishing/mixins/mixinTocLink";

export default {
  name: "Content",
  mixins:[tocLink],
  data() {
    return {
      frameData:{
        pageTitle:"기본 스타일",
        tocData:[],
      },
    };
  },
  created() {
    this.$emit("updateStatus", this.frameData);
  },
};
</script>
