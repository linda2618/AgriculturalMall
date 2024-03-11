<template>
    <div>
        <FixedHeader></FixedHeader>
        {{ productInfo.content }}
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import FixedHeader from '@/components/fixedHeader.vue'

const route = useRoute()
let id = ref('')

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
})

</script>

<style lang="scss" scoped>

</style>