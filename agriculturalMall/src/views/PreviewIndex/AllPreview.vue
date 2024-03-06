<template>
    <div class="preview">
        <el-input
            v-model="keyword"
            style="width: 440px"
            placeholder="输入宝贝"
            clearable
        />
    <el-button type="success">搜索</el-button>

    <div class="image">
        <span class="title">特价大甩卖!!!</span>
        <div class="block text-center" m="t-4">
            <el-carousel :interval="4000"
                indicator-position="none"
                type="card"
                height="200px"
            >
                    <el-carousel-item v-for="item in urls" :key="item">
                        <h3 text="2xl"
                            justify="right">
                            <img
                                :src="item.img"
                                alt=""
                                srcset=""
                                class="carousel-image"
                                style="height: 300px; width: 400px;"
                                justify="right">
                        </h3>
                     </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import p1 from  '@/assets/images/1.png'
import p2 from  '@/assets/images/2.png'
import p3 from  '@/assets/images/3.png'
import p4 from  '@/assets/images/4.png'
import p5 from  '@/assets/images/5.png'
import p6 from  '@/assets/images/6.png'


const keyword = ref('')

// 引入本地图片
const urls = reactive([
    {img: p1},
    {img: p2},
    {img: p3},
    {img: p4},
    {img: p5},
    {img: p6},
])

</script>

<style lang="scss" scoped>

.preview {
    padding-right: 20px;
}

.image {
    margin-top: 40px;

    .title {
        color: red;
        font-size: 20px;;
    }
 
}

</style>