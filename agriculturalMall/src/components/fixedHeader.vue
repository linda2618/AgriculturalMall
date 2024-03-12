<template>
    <div class="com_header">
        <!-- 头部固定 -->
        <div class="header">
                <div @click="goShop"><el-icon><ShoppingTrolley /></el-icon>购物车</div>
                <div @click="goCollect"><el-icon><CollectionTag /></el-icon>收藏夹</div>
                <div @click="goProfile"><el-icon><User /></el-icon>个人信息</div>
                <div @click="goConnect"><el-icon><InfoFilled /></el-icon>
                <el-dropdown>
                    <span class="drewLink">
                    联系我们
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                    </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>人工客服</el-dropdown-item>
                        <el-dropdown-item>意见反馈</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 点击头部，跳转页面
const goShop = () => {
    console.log('111')
}

const goCollect = () => {
    console.log('222')  
}

const goProfile = () => {
}

const goConnect = () => {
}

</script>

<style lang="scss" scoped>
.com_header {
    width: 100%;
    position: fixed;
    background-color: #f8f8f8;


    .header {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: end;
        font-size: 11px;
        padding: 5px 0;
        z-index: 100;

        div, .container {
            font-size: 12px;
            cursor: pointer;
            margin-right: 30px;
        }
        div:hover {
            color: hsla(160, 100%, 37%, 1);

        }
    }
}


</style>