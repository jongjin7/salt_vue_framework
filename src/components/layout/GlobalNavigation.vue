<template>
  <header class="side-container">
    <div class="inner-wrap">
      <div class="site-logo">
        <s-button type="link" href="/" icon="storm" only-icon title="storm">Storm</s-button>
      </div>

      <div class="nav-title">
        <div class="title"><span class="text">{{ currentMenus.menuTitle }}</span></div>
      </div>

      <div class="nav-wrap">
        <nav class="nav-gnb nav-common">
          <ul class="nav-list">
            <li class="nav-item depth-1" v-for="item in currentMenus.menuItems" :key="item.primary.text">
              <a href="#" class="nav-link depth-1-link" :class="{ on : item.primary.selected}" @click="onClickPrimaryMenu($event, item.primary)">
                <s-svg-icon :name="item.primary.icon"></s-svg-icon>
                <span class="text">{{ item.primary.text}}</span>
                <s-svg-icon name="arrow" v-if="item.primary.children.length > 0"></s-svg-icon>
              </a>

              <div class="sub-menu-wrap" v-if="item.primary.children.length > 0" >
                <ul class="sub-menu depth-2">
                  <li class="nav-item" v-for="submenu in item.primary.children" :key="submenu.text">
                    <router-link :to="{name: submenu.link }" class="nav-link depth-2-link" :class="{ on : submenu.selected }">
                      <span class="text">{{ submenu.text }}</span>
                    </router-link>
                  </li>
                </ul>

                <div class="pointer-group">
                  <div class="bg"></div>
                  <div class="pointer"></div>
                  <div class="hover-pointer"></div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import VueRouter from "vue-router";
const { isNavigationFailure, NavigationFailureType, } = VueRouter;
export default {
  name: "GlobalNavigation",
  data() {
    return{
      menuData:{
        publishing:{
          menuTitle:"퍼블리싱 리스트",
          menuItems:[
            {
              primary: {
                text: "퍼블리싱 리스트",
                link: "publishing-list",
                icon:"global",
                children: [],
              },
            },
            {
              primary:{
                text:"컴포넌트 모음",
                link:"",
                icon:"link",
                children:[
                  {
                    text:"기본 스타일",
                    link:"content-base",
                  },
                  {
                    text:"기본 UI 컴포넌트",
                    link:"ui-base",
                  },
                  {
                    text:"Form 컴포넌트",
                    link:"form-base",
                  },
                  {
                    text:"내가 만드는 폼",
                    link:"my-form-base",
                  },
                  {
                    text:"테이블 컴포넌트",
                    link:"table-base",
                  },
                  {
                    text:"자주사용하는 컴포넌트",
                    link:"comp-ui",
                  },
                  {
                    text:"팝업 컴포넌트",
                    link:"boot-popup",
                  },
                  {
                    text:"상세화면 템플릿",
                    link:"detail_template",
                  },
                  {
                    text:"스키마 레이아웃",
                    link:"Schema_layout",
                  }
                ],
              },
            },
            {
              primary:{
                text:"개발용 페이지",
                link:"",
                icon:"book",
                children:[
                  {
                    text:"다른페이지",
                    link:"other",
                  },
                  {
                    text:"기본 UI 컴포넌트",
                    link:"ui-base",
                  },
                  {
                    text:"Form 컴포넌트",
                    link:"form-base",
                  }
                ],
              },
            },
            {
              primary:{
                text:"1뎁스메뉴메뉴메뉴메뉴#2",
                link:"",
                icon:"warning",
                children:[
                  {
                    text:"서브메뉴#1-1",
                    link:"link#1-1",
                  },
                  {
                    text:"서브메뉴#1-2",
                    link:"link#1-2",
                  },
                  {
                    text:"서브메뉴#1-3",
                    link:"link#1-4",
                  }
                ],
              },

            }
          ],
        },
      },
      currentMenus : "",
      domGnb:"",
    };
  },
  watch:{
    $route(to, from) {
      if (to.path != from.path) {
        this.setGnb();
        this.resetGnb();
        setTimeout(()=>{
          this.activateSubMenu();
        }, 0);
      }
    },
  },
  computed:{

  },
  created() {
    this.init();
  },
  mounted() {
    this.$nextTick(()=>{
      this.domGnb = $(".nav-gnb");
      this.activateSubMenu();
      this.addEvent();
    });
  },
  destroyed() {
    this.resetGnb();
  },
  methods:{
    init() {
      this.setGnb();
    },

    setGnb() {
      const rootPathName = this.$route.matched[0].path.replace("/", "");
      this.currentMenus = $.extend(true, {}, this.menuData[rootPathName]);
      this.matchCurrentMenu(this.currentMenus.menuItems, this.$route.name);
    },

    matchCurrentMenu(arrData, name) {
      // console.log("arrData", arrData);
      for (let i = 0; i < arrData.length; i++) {
        if (arrData[i].primary) {
          if (arrData[i].primary.link === name) {
            console.log("1뎁스 매칭");
            arrData[i].primary.selected = true;
            break;
          }
          else if (arrData[i].primary.children.length > 0) {
            this.matchCurrentMenu(arrData[i].primary.children, name);
          } else {
            console.log("1뎁스만 존재", arrData[i]);
          }
        } else if (arrData[i].link === name) {
          console.log("동일한 아이템 매칭", arrData[i]);
          arrData[i].selected = true;
          break;
        } else {
          // console.log('none submenu :=>', item )
          if (
            arrData[i].link !== name &&
              arrData[i].children &&
              arrData[i].children.length > 0
          ) {
            this.matchCurrentMenu(arrData[i].children, name);
          }
          // else console.log("children이 미정의 또는 없을때", arrData[i]);
        }
      }
    },

    resetGnb() {
      this.domGnb.find("a").removeClass("open").removeClass("on");
      this.domGnb.find(".sub-menu-wrap").removeAttr("style");
    },

    activateSubMenu() {
      let hadChildPrimaryBtn;
      if(this.domGnb.find(".depth-2 .on").length > 0) {
        // 현재 페이지가 서브메뉴
        let selectedMenu = this.domGnb.find(".depth-2 .on");
        hadChildPrimaryBtn = selectedMenu.closest(".depth-1").children(".nav-link");

        if(!hadChildPrimaryBtn.hasClass("on")) {
          selectedMenu.closest(".depth-1").children(".nav-link").addClass("on open");
          this.showSubMenu(hadChildPrimaryBtn.next());
        }
        this.movePointer(selectedMenu, ".pointer");
      }else{
        // hadChildPrimaryBtn = this.domGnb.find(".depth-1-link.on");
      }
    },

    // //////////////////////////////////////////////////////////////////////////////////
    // define Events
    addEvent() {
      this.domGnb.find(".depth-2-link").on({
        mouseenter: this.onMouseOverSubMenu,
        mouseleave: this.onMouseOutSubMenu,
      });
    },

    onMouseOverSubMenu(e) {
      this.movePointer($(e.currentTarget), ".hover-pointer");
    },

    onMouseOutSubMenu(e) {
      $(e.currentTarget).closest(".sub-menu-wrap").find(".hover-pointer").css("transform", "");
    },

    onClickPrimaryMenu(e, menu) {
      e.preventDefault();
      if(menu.children.length > 0) {
        this.toggleSubMenu($(e.currentTarget));
        console.log("토글용 버튼", menu);
      }else{
        console.log("link menu", menu.link);
        this.$router.push({ name: menu.link, }).catch((failure) => {
          if (isNavigationFailure(failure)) {
            // show a small notification to the user
            console.warn("error", NavigationFailureType, failure);
          }
        });
      }
    },

    toggleSubMenu(target) {
      if(!target.hasClass("open")) {
        target.addClass("open");
        this.showSubMenu(target.next());
      }else{
        target.removeClass("open");
        this.hideSubMenu(target.next());
      }
    },

    showSubMenu(target) {
      target.css("max-height", target.find(".sub-menu").outerHeight(true));
    },

    hideSubMenu(target) {
      target.css("max-height", "");
    },

    movePointer(menu, pointer) {
      menu.closest(".sub-menu-wrap").find(pointer).css({ transform: `translate(0, ${menu.position().top + 3}px)`, });
    },

  },
};
</script>

