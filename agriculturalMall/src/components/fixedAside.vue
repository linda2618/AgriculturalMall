<template>
    <div class="fixed_aside">
        <!-- 固定在侧边的tab -->
        <div class="aside">
            <div @click="goNews"><el-icon><ChatDotRound /></el-icon>消息</div>
            <div @click="goShop"><el-icon><ShoppingTrolley /></el-icon>购物车</div>
            <div @click="goProfile"><el-icon><Edit /></el-icon>反馈</div>
            <div @click="goProfile"><el-icon><User /></el-icon>客服</div>
            <div @click="goConnect"><el-icon><Top /></el-icon>回顶部</div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 点击跳转页面

const goNews = () => {

}

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

.fixed_aside {
    width: 70px;
    position: fixed;
    top:100px;
    right: 10px;
    background-color: #fff;
    border-radius: 20px;

    .aside {
        display: flex;
        flex-direction: column;


        div {
            display: flex;
            flex-direction: column;
            margin: 16px 12px;
            text-align: center;
            font-size: 12px;
            .el-icon {
                margin-left: 8px;
                font-size: 28px;;
            }
        }
    }
}





</style>