<template>
  <div class="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="All" name="first">
        <el-empty description=""></el-empty>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
  background-color: #efefef;
}
.card {
  padding: 10% 5%;
  color: #146ec2;
}

.link {
  text-decoration: none;
  font-weight: bold;
}

.el-icon-sell {
  font-size: 40px;
}
.el-icon-s-home {
  font-size: 40px;
}

.el-icon-s-shop {
  font-size: 40px;
}

.tabs {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
