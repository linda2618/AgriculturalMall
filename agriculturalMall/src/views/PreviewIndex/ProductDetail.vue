<template>
    <div class="main">
        <!-- 商品详情 -->
        <FixedHeader class="fixHead"></FixedHeader>
        <div class="detail">
            <div class="content">
                <div class="search">
                    <span>你喜欢?</span>
                    <el-input
                        v-model="search"
                        style="width: 50%;  height: 40px; margin-top: 25px;"
                        placeholder="搜索"
                        :prefix-icon="Search"
                        class="search_input"
                    />
                    <el-button
                        type="success"
                        plain
                        style="width: 50px;  height: 40px;  margin-top: 25px;"
                        @click="goBack"
                    >返回</el-button>
                </div>
                <div>
                    <el-card>
                        <div class="store">
                            <span>
                                所属店铺： {{ 123123 }}cls
                            </span>
                            <span @click="goStore">
                                <el-icon><Goods /></el-icon>
                                进入店铺
                            </span>
                        </div>
                        <el-divider />
                        <div class="info">
                            <div class="img">
                                <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    style="width: 100%"
                                />
                            </div>
                            <div class="content">
                                <span class="title">259g新疆特产黑加仑</span>
                                <span class="jia">￥<span class="price">{{  15.9  }}</span></span>
                                <span>配送：area:新疆乌鲁木齐 {{ 12313 }}</span>
                                <span>付款后48小时内发货</span>
                                <!-- 立即购买/加入购物车 -->
                                <div class="car">
                                    <el-button type="danger">立即购买</el-button>
                                    <el-button type="warning">加入购物车</el-button>
                                    <span class="collect"><el-icon><Star /></el-icon><el-icon><StarFilled /></el-icon>收藏</span>
                                </div>
                            </div>
                        </div>
                       
                    </el-card>
                </div>
            </div>
           
        </div>
        <FixedAside v-show="showAside"></FixedAside>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, onBeforeUnmount} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'

import FixedHeader from '@/components/fixedHeader.vue'
import FixedAside from '@/components/fixedAside.vue'

const route = useRoute()
const router = useRouter()
let id = ref('')
const search = ref('')
const showAside = ref(true)

let productInfo = reactive({})

const getProductInfo = () => {
    //获取货品id
    id = route.query.id

    //调用函数获取数据
    // const res = await request(id)

    productInfo = {
        id: '1',
        title: '新鲜大白菜',
        content: "今日特价新鲜大白菜,便宜卖不要99.9也不要9.99,只要5.9!!!只要5.9!!!只要5.9!!!",
        price: "6",
        shop: '林姐菜铺',
        createTime: '2024-03-06 00:00:01',
        updateTime: '2024-03-06 23:59:59',
    }

}

const goStore = () => {
    console.log('进入店铺~！')
}

const goBack = () => {
    router.go(-1)
}

//监听窗口大小，控制侧边栏 显示/隐藏
const windowSize = ref({ width: window.innerWidth });

const handleResize = () => {
    windowSize.value = { width: window.innerWidth };
    if (windowSize.value.width <= 750) {
        showAside.value = false;
        return;
    }
    showAside.value = true;
};

onMounted(() => {
    getProductInfo()
    console.log(windowSize.value.width, 'width')
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});

</script>

<style lang="scss" scoped>
.main {
    width: 100%;
}

.detail {
    width: 100%;
    background-color: rgb(241, 239, 237);
    // margin: 0 auto;
    padding-top: 50px;

    .content {
        width: 70%;
        margin: 10px auto;

        .search {
            width: 100%;
            height: 90px;
            margin-bottom: 20px;
            line-height: 90px;
            background-color: #fff;
            border-radius: 40px;
            display: flex;
            justify-content: space-around;

            span {
                font-weight: bold;
                color: #ccc;
                font-size: 16px;
            }
        }

        .store {
            display: flex;
            justify-content: space-between;
        }

        .info {
            display: flex;
            justify-content: start;

            .content {
                display: flex;
                flex-direction: column;
                margin-left: 20px;

                span {
                    font-size: 14px;
                    margin-bottom: 12px;
                }

               .title {
                font-size: 17px;
                font-weight: bold;
               }

               .jia {
                color: red;

                .price {
                    font-size: 25px;
                }

               }
               .car {
                    margin-top: 11px;

                    .collect {
                        margin-left: 20px;
                    }

                }
            }

        }
    }
}

</style>