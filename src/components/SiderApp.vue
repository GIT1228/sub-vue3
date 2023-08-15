<template>
    <el-menu style="height: 100%;" default-active="1">
        <el-menu-item @click="click"> 导航1 </el-menu-item>
        <el-menu-item @click="click"> 导航2 </el-menu-item>
        <el-menu-item @click="click"> 导航3 </el-menu-item>
    </el-menu>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const click = () => {
    router.push("/activityList/pageOne");
}
</script>
<style lang='sass' scoped>
.el-aside>.el-menu
    border-right: 0px
.el-menu-item
    display: block
</style>