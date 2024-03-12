<template>
    <div>
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
                    <el-button type="success" plain style="width: 50px;  height: 40px;  margin-top: 25px;">返回</el-button>
                </div>
                <div>
                    <el-card>
                        <div class="store">
                            <span>
                                所属店铺： {{ 123123 }}
                            </span>
                            <span>
                                <el-icon><Goods /></el-icon>
                                进入店铺
                            </span>
                        </div>
                        <el-divider />
                        <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        style="width: 30%"
                        />
                    </el-card>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'

import FixedHeader from '@/components/fixedHeader.vue'

const route = useRoute()
let id = ref('')
const search = ref('')

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




onMounted(() => {
    getProductInfo()
    console.log(productInfo.content, '1213')
})

</script>

<style lang="scss" scoped>

.detail {
    background-color: rgb(241, 239, 237);
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

    }
}

</style>