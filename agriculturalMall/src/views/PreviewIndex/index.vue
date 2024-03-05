<template>
    <el-container class="container">
      <el-aside width="160px">
        <el-scrollbar>
        <!-- :default-openeds="['1']" -->
            <el-menu>
            <el-menu-item index="1"><el-icon><Menu /></el-icon>首页</el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                <el-icon><Tickets /></el-icon>农产品
                </template>
                <el-sub-menu index="2-1">
                <template #title>蔬菜</template>
                <el-menu-item index="2-1-1">蔬菜</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-2">
                <template #title>水果</template>
                <el-menu-item index="2-2-1">水果</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-3">
                <template #title>水产</template>
                <el-menu-item index="2-3-1">水产</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                <el-icon><PieChart /></el-icon>销售可视
                </template>
                <el-menu-item-group>
                <el-menu-item index="3-1">上周销售情况</el-menu-item>
                <el-menu-item index="3-2">上月销售情况</el-menu-item>
                <el-menu-item index="3-3">本季销售情况</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            </el-menu>
        </el-scrollbar>
      </el-aside>
    <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    </el-container>
    </el-container>
</template>


<script setup>

</script>

<style lang="scss" scoped>

.container {
    width: 100%;
}
</style>