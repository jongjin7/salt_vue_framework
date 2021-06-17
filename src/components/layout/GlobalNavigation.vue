<template>
  <header class="side-container">
    <nav>
      <ul>
        <li><router-link :to="{name:'main'}">메인으로</router-link></li>
        <li><router-link :to="{name:'publishing-list'}">퍼블리싱 페이지리스트</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "GlobalNavigation",
};
</script>

