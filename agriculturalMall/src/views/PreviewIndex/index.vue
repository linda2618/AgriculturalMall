<template>
    <!-- 主页，侧边栏+头部导航 -->
    <el-container class="container">
      <el-aside width="160px">
        <el-scrollbar>
        <!-- :default-openeds="['1']" -->
            <el-menu>
            <el-menu-item index="1" @click="goMenu"><el-icon><Menu /></el-icon>首页</el-menu-item>
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
        <!-- 头部固定 -->
        <el-header class="header">
                <div @click="goShop"><el-icon><ShoppingTrolley /></el-icon>购物车</div>
                <div @click="goCollect"><el-icon><Star /></el-icon>收藏夹</div>
                <div @click="goProfile"><el-icon><User /></el-icon>个人信息</div>
                <div><el-icon><InfoFilled /></el-icon>
                <el-dropdown>
                    <span class="drewLink">
                    联系我们
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                    </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="goManService">人工客服</el-dropdown-item>
                        <el-dropdown-item @click="goFeedback">意见反馈</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-header>
        <!-- 主体部分嵌入组件 -->
        <div class="main">
            <!-- currentTab 改变时组件也改变 -->
            <component :is="currentComponent"></component>
        </div>
        </el-container>
    </el-container>
</template>


<script setup>
import { ref, shallowRef, reactive } from 'vue'
import AllPreview from './AllPreview.vue'
import ShoppingCar from './ShoppingCar.vue'
import Collect from './Collect.vue'
import YouProfile from './YouProfile.vue'
import Feedback from './Connection/Feedback.vue'
import ManService from './Connection/ManService.vue'

const currentComponent = shallowRef(AllPreview)


// 点击头部，切换组件
const goShop = () => {
    currentComponent.value = ShoppingCar
    console.log('111')
}
const goCollect = () => {
    currentComponent.value = Collect
    console.log('222')
    
}
const goProfile = () => {
    currentComponent.value = YouProfile
}

// 客服联系
const goManService = () => {
    currentComponent.value = ManService
}

const goFeedback = () => {
    currentComponent.value = Feedback
}


// 回到首页浏览
const goMenu = () => {
    currentComponent.value = AllPreview
}

</script>

<style lang="scss" scoped>

.container {
    width: 100%;
}
 
.header {
    display: flex;
    background-color: #f8f8f8;
    width: 100%;
    height: 30px;
    font-size: 12px;
    padding-top: 8px;
    position: fixed;
    z-index: 100;

    div, .container {
        font-size: 12px;
        cursor: pointer;
        margin-right: 20px;
    }
    div:hover {
        color: hsla(160, 100%, 37%, 1);

    }
}

.main {
    margin-top: 30px;
}
</style>