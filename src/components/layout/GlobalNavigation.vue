<template>
  <header class="side-container">
    <div class="inner-wrap">
      <div class="site-logo">
        <s-button icon="storm" only-icon title="storm">Storm</s-button>
      </div>

      <div class="nav-title">
        <div class="title"><span class="text">{{ currentMenus.menuTitle }}</span></div>
      </div>

      <nav class="nav-gnb nav-common">
        <ul class="nav-list">
          <li class="nav-item depth-1" v-for="item in currentMenus.menuItems" :key="item.primary.text">
            <a href="#" class="nav-link depth-1-link" :class="{ on : item.primary.selected}" @click.stop="onClickMenu($event, item.primary)">
              <s-svg-icon :name="item.primary.icon"></s-svg-icon>
              <span class="text">{{ item.primary.text}}</span>
              <s-svg-icon name="arrow" v-if="item.primary.children.length > 0"></s-svg-icon>
            </a>

            <div class="sub-menu-wrap" v-if="item.primary.children.length > 0" >
              <div class="pointer-group">
                <div class="bg"></div>
                <div class="pointer"></div>
                <div class="hover-pointer"></div>
              </div>
              <ul class="sub-menu depth-2">
                <li class="nav-item" v-for="submenu in item.primary.children" :key="submenu.text">
                  <router-link :to="{name: submenu.link }" class="nav-link depth-2-link" :class="{ on : submenu.selected }">
                    <span class="text">{{ submenu.text }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
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
                  }
                ],
              },
            },
            {
              primary:{
                text:"1뎁스메뉴메뉴메뉴메뉴#2",
                link:"",
                icon:"book",
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
            },
            {
              primary:{
                text:"1뎁스메뉴#3",
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
        setTimeout(()=>{
          this.activeMenu();
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
      this.activeMenu();
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
    resetGnb() {
      console.log("resetGnb");
      // this.domGnb.find("a").removeClass("on");
    },
    addEvent() {
      let self = this;
      this.domGnb.on("mouseenter", ".depth-2-link", function(e) {
        self.onMouseOverSubMenu($(this));
      });
      this.domGnb.on("mouseleave", ".depth-2-link", function(e) {
        self.onMouseOutSubMenu($(this));
      });
    },
    setGnb() {
      const rootPathName = this.$route.matched[0].path.replace("/", "");
      this.currentMenus = $.extend(true, {}, this.menuData[rootPathName]);
      this.selectedMenu(this.currentMenus.menuItems, this.$route.name);
      // console.log("this.menuData", this.currentMenus.menuItems[0].primary);
    },

    selectedMenu(arrData, name) {
      console.log("arrData", arrData);
      for (let i = 0; i < arrData.length; i++) {
        if (arrData[i].primary) {
          if (arrData[i].primary.link === name) {
            console.log("1뎁스 매칭");
            arrData[i].primary.selected = true;
            break;
          }
          else if (arrData[i].primary.children.length > 0) {
            this.selectedMenu(arrData[i].primary.children, name);
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
            this.selectedMenu(arrData[i].children, name);
          }
          // else console.log("children이 미정의 또는 없을때", arrData[i]);
        }
      }
    },

    activeMenu() {
      console.log("activeMenu");
      let selectedMenu = this.domGnb.find(".depth-2 .on");
      // if(!selectedMenu.hasClass("depth-1-link")) {
      console.log("asaaaa", selectedMenu);
      let depth1_menu = selectedMenu.closest(".depth-1").children(".nav-link");
      if(!depth1_menu.hasClass("on")) {
        selectedMenu.closest(".depth-1").children(".nav-link").addClass("on");
        this.toggleSubMenu(depth1_menu);
      }else{
        this.movePointer(selectedMenu);

      }
      console.log("현재 투뎁스 아이템", selectedMenu);
      // }else{
      //   console.log("1뎁스 메뉴 이벤트");
      //
      // }

    },

    // changeMenu(selectedMenu) {
    //   if(!selectedMenu.hasClass("depth-1-link")) {
    //     // console.log("asaaaa", selectedMenu.closest(".depth-1").children(".nav-link"));
    //     selectedMenu.closest(".depth-1").children(".nav-link").addClass("on");
    //     this.movePointer(selectedMenu);
    //     this.toggleSubMenu(selectedMenu.closest(".depth-1").children(".nav-link"));
    //   }
    // },

    onClickMenu(e, menu) {

      if(menu.children.length > 0) {
        let target = $(e.currentTarget);

        this.toggleSubMenu(target);
        console.log("토글용 버튼", menu);

      }else{
        console.log("link menu", menu.link, this.$router);
        this.$router.push({ name: menu.link, });
      }
    },

    toggleSubMenu(target) {
      let subWrap = target.next();
      if(!target.hasClass("open")) {
        target.addClass("open");
        subWrap.css("max-height", subWrap.find(".sub-menu").outerHeight(true));
      }else{
        target.removeClass("open");
        subWrap.css("max-height", "");
      }
    },

    movePointer(menu) {
      console.log("pointer", menu);
      menu.closest(".sub-menu-wrap").find(".pointer").css({ transform: `translate(0, ${menu.position().top + 3}px)`, });
    },

    onMouseOverSubMenu(menu) {
      menu.closest(".sub-menu-wrap").find(".hover-pointer").css({ transform: `translate(0, ${menu.position().top + 3}px)`, });
    },

    onMouseOutSubMenu() {
      $(".nav-gnb").find(".hover-pointer").css("transform", "");
    },
  },
};
</script>

