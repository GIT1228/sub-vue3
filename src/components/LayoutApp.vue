<template>
  <div class="common-layout">
    <el-container>
      <el-header class="headApp" height="11vh">
        <HeaderApp />
      </el-header>
      <el-container class="bodyApp">
        <el-aside width="200px">
          <SiderApp />
        </el-aside>
        <el-main>
          <div class="mianClass"><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
// import { ref } from 'vue';
import HeaderApp from './HeaderApp.vue';
import SiderApp from './SiderApp.vue';
</script>
<style scoped lang='sass'>
.el-header
  padding: 0px 5px
.el-aside
  background-color: #fff
  margin: 0px 5px 10px 10px
.el-main
  padding: 0px 10px 10px 0px
.headApp
  margin: 5px
.bodyApp
  height: 88vh
.mianClass 
  width: 100%;
  height: 100%;
  background-color: #fff;
</style>