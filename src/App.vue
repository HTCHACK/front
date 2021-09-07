<template>
  <div id="app">
    <div class="line"></div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#4376a6"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item index="4"
        ><router-link :to="{ name: 'Home' }"
          ><img v-bind:src="image" class="img" /></router-link
      ></el-menu-item>
      <el-menu-item index="2"
        ><router-link :to="{ name: 'About' }"> Cars </router-link></el-menu-item
      >
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("./assets/unnamed.png"),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-menu-demo :active {
  background-color: #2e6190;
}
.img {
  width: 70px;
}
</style>
