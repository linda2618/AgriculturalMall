<template>
    <!-- 主页，默认页面 -->
    <div class="preview">
        <!-- 搜索部分 -->
        <div class="search">
            <el-input
                v-model="keyword"
                style="width: 440px"
                placeholder="输入宝贝"
                clearable
                class="search_input"
            />
             <el-button type="success" class="search_button">搜索</el-button>
        </div>
        
        <!-- 图片轮播 -->
        <div class="image">
            <span class="title">特价大甩卖</span>
            <div class="carousel">
                <el-carousel :interval="4000"
                    indicator-position="none"
                    type="card"
                    height="200px"
                    @change="changeCount"
                >
                        <el-carousel-item v-for="item in urls" :key="item" height="400px">
                            <h3
                                justify="end">
                                <el-image
                                    :src="item.img"
                                    alt=""
                                    srcset=""
                                    class="carousel-image"
                                    style="height: 300px;"
                                    justify="end"
                                />
                            </h3>
                        </el-carousel-item>
                </el-carousel>
            </div>
            <div class="carousel_text">
                <div 
                    v-for="(item,index) in currentItem"
                    :key="index"
                    class="text_price"
                >
                    <div>{{item.name}}</div>
                    <div>{{item.data}}</div>
                </div>
            </div>
        </div>

        <!-- 猜你喜欢 -->
        <div class="guess_title">
            <h3>猜你喜欢</h3>
            <el-image :src="xi" class="guess_img"/>
        </div>
        <div class="guess_main">
            <div
                class="guess_card"
                v-for="item in 12"
            >
                <PreviewCard
                    :dataSrc="p3"
                    :title="'新鲜大白菜'"
                    :content="'今日特价新鲜大白菜,便宜卖不要99.9也不要9.99,只要5.9!!!只要5.9!!!只要5.9!!!'"
                    :price="6"
                    @click="goDetail"
                ></PreviewCard>
            </div>
            
        </div>

        <!-- 侧边固定tab -->
        <FixedAside v-show="showAside"></FixedAside>

    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router';

import p1 from  '@/assets/images/1.png'
import p2 from  '@/assets/images/2.png'
import p3 from  '@/assets/images/3.png'
import p4 from  '@/assets/images/4.png'
import p5 from  '@/assets/images/5.png'
import p6 from '@/assets/images/6.png'
import xi from '@/assets/images/xi.png'
import PreviewCard from '@/components/previewCard.vue'
import FixedAside from '@/components/fixedAside.vue'

const router = useRouter()
const keyword = ref('')
const showAside = ref(false)

// 引入本地图片
const urls = reactive([
    {img: p1},
    {img: p2},
    {img: p3},
    {img: p4},
    {img: p5},
    {img: p6},
])
let currentIndex = ref(0)
//特价列表
const countList = reactive([
    { name: '皮皮虾有活动啦'  , data: '39.9元' },
    { name: '今日鸭梨特价', data: '9.9元' },
    { name: '售出火龙果', data: '19.9元' },
    { name: '白菜甩卖'  , data: '5.9元' },
    { name: '今日胡萝卜特价'  , data: '8.9元' },
    { name: '新鲜曹鱼'  , data: '29.9元' },
])

let currentItem = computed(() => {
    const startIndex = currentIndex.value;
    const endIndex = startIndex + 3 
    let sliceList = []
    if (endIndex >= 6) {
        const end = endIndex % 6
        return sliceList = [...countList.slice(startIndex), ...countList.slice(0, end)]
    }

    return countList.slice(startIndex, endIndex)
})

//图片切换时
const changeCount = (e) => {
    //改变当前索引
   currentIndex.value = e % 6
}

//商品详情 (假数据)
const detailInfo = reactive({
    id: '1',
    title: '新鲜大白菜',
    content: "今日特价新鲜大白菜,便宜卖不要99.9也不要9.99,只要5.9!!!只要5.9!!!只要5.9!!!",
    price: "6",
    shop: '林姐菜铺',
    createTime: '2024-03-06 00:00:01',
    updateTime: '2024-03-06 23:59:59',
})

// 进入详情页
const goDetail = () => {
    console.log(detailInfo.id, '跳转前detaillinfo')
      router.push({
        path: '/productDetail',
        query: {id: detailInfo.id},
    })
}

//监听窗口大小，控制侧边栏 显示/隐藏
let scrollTop = ref({ top:  document.documentElement.scrollTop });

const handleScroll = () => {
  // 获取滚动条的位置或滚动的距离
    scrollTop.value.top = document.documentElement.scrollTop;
    // console.log(scrollTop.value.top, 'top!!')
    if (scrollTop.value.top >= 520) {
        showAside.value = true;
        return;
    }
    showAside.value = false;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>

.preview {
    padding-right: 20px;

    .search {
        width: 100%;
        height: 100px;

        .search_input, 
        .search_button {
            margin-left: 20px;
            margin-top: 35px;

        }
    }
}

.image {
    width: 1200px;  
    margin-top: 40px;

    .title {
        font-size: 20px;;
    }

    .carousel-image {
        width: 580px;
    }
    
    .carousel_text {
        display: flex;
        justify-content: space-around;
    }
}

.guess_title {
    margin-top: 50px;
    display: flex;

    .guess_img {
        margin-left: 20px;
        padding-top: 20px;
        width: 78px;
        height: 24px;
    }
}

.guess_main {
    display: flex;
    flex-wrap: wrap;
    background-color:rgba(241, 239, 237);


    .guess_card {
        margin-right: 20px;
        margin-bottom: 20px;
    }

}

</style>