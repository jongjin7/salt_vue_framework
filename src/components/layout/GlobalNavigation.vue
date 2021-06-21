<template>
  <header class="side-container">
    <div class="inner-wrap">
      <div class="site-logo">
        <s-button icon="storm" only-icon title="storm">Storm</s-button>
      </div>
      <nav class="nav-gnb">
        <div class="nav-title">
          <div class="title"><span class="text">프로젝트 네임</span></div>
        </div>
        <ul class="nav-list">
          <li class="nav-item">
            <router-link :to="{name:'publishing-list'}" class="nav-link depth-1-link">
              <s-svg-icon name="global"></s-svg-icon>
              <span class="text">퍼블리싱 페이지리스트</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link depth-1-link">
              <s-svg-icon name="global"></s-svg-icon>
              <span class="text">저장소</span>
              <s-svg-icon name="arrow" class="r-icon"></s-svg-icon>
            </a>
            <div class="sub-menu-wrap">
              <ul class="sub-menu">
                <li class="nav-item">
                  <a href="#" class="nav-link depth-2-link">
                    <span class="text">서브메뉴1</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link depth-2-link">서브메뉴2</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link depth-2-link">서브메뉴3</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link depth-2-link">서브메뉴4</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link depth-1-link">
              <s-svg-icon name="global"></s-svg-icon>
              <span class="text">데이터 모델 관리</span>
              <s-svg-icon name="arrow"></s-svg-icon>
            </a>
            <div class="sub-menu-wrap">
              <ul class="sub-menu">
                <li class="nav-item">
                  <a href="#" class="nav-link depth-2-link">서브메뉴3-1</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link depth-2-link">서브메뉴3-2</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link depth-2-link">서브메뉴3-3</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link depth-2-link">서브메뉴3-4</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'publishing-list'}" class="nav-link depth-1-link">
              <s-svg-icon name="global"></s-svg-icon>
              <span class="text">데이터 소스 변환</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "GlobalNavigation",
};
</script>

