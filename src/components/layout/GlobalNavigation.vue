<template>
  <header class="side-container">
    <div class="inner-wrap">
      <div class="site-logo">
        <s-button icon="storm" only-icon title="storm">Storm</s-button>
      </div>

      <div class="nav-title">
        <div class="title"><span class="text">{{ menuData.menuTitle }}</span></div>
      </div>

      <nav class="nav-gnb nav-common">
        <ul class="nav-list">
          <li class="nav-item" v-for="item in menuData.menuItems" :key="item.depth1.text">
            <router-link :to="{name: item.depth1.link }" class="nav-link depth-1-link" :class="{ on : item.depth1.is_active }">
              <s-svg-icon :name="item.depth1.icon"></s-svg-icon>
              <span class="text">{{ item.depth1.text}}</span>
              <s-svg-icon name="arrow" v-if="item.depth2.length > 0"></s-svg-icon>
            </router-link>
            <div class="sub-menu-wrap" v-if="item.depth2.length > 0" >
              <div class="pointer-group">
                <div class="bg"></div>
                <div class="pointer"></div>
                <div class="hover-pointer"></div>
              </div>
              <ul class="sub-menu">
                <li class="nav-item" v-for="item2 in item.depth2" :key="item2.text">
                  <router-link :to="{name: item2.link }" class="nav-link depth-2-link" :class="{ on : item2.is_active }">
                    <span class="text">{{ item2.text }}</span>
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
        menuTitle:"퍼블리싱 리스트",
        menuItems:[
          {
            depth1: {
              text: "퍼블리싱 리스트",
              link: "publishing-list",
              icon:"global",
              is_active: false,
            },
            depth2: [],
          },
          {
            depth1:{
              text:"컴포넌트 모음",
              link:"",
              icon:"link",
              is_active: true,
            },
            depth2:[
              {
                text:"기본 스타일",
                link:"content-base",
                is_active: true,
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
          {
            depth1:{
              text:"1뎁스메뉴메뉴메뉴메뉴#2",
              link:"",
              icon:"book",
            },
            depth2:[
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
          {
            depth1:{
              text:"1뎁스메뉴#3",
              link:"",
              icon:"warning",
            },
            depth2:[
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
          }
        ],
      },
    };
  },
  computed:{

  },
  created() {
    this.$eventBus.$on("activeGnb", this.activeMenuItem);
  },
  mounted() {
    const gnb = $(".nav-gnb");
    let self = this;
    gnb.on("mouseenter", ".depth-2-link", function(e) {
      self.onMouseOverSubMenu($(this));
    });
    gnb.on("mouseleave", ".depth-2-link", function(e) {
      self.onMouseOutSubMenu($(this));
    });
  },
  methods:{
    activeMenuItem(payload) {
      console.log("페이지 변경 ==> menu change ::", payload);
    },

    initActiveMenu(menu) {

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

