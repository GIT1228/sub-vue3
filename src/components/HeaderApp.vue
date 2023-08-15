<template>
  <el-menu mode="horizontal" background-color="#fff" text-color="#409eff" active-text-color="#fff">
    <el-menu-item index="1">策划列表</el-menu-item>
  </el-menu>
</template>
<script setup>

</script>
<style lang = 'sass' scoped>
.el-header .el-menu-item
  font-size: 25px
  color:#409eff
.el-menu--horizontal>.el-menu-item
  height: 99px
  line-height: 100px
.el-menu--horizontal>.el-menu-item:hover
  border-radius: 10px
  border-bottom: 0px
.el-menu--horizontal>.el-menu-item.is-active
  border-radius: 10px
  border-bottom: 0px
  background-color: #409eff !important
</style>