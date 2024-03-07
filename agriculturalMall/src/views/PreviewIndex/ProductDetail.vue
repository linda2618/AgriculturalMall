<template>
    <div>
       <header></header>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

let title = ref("")
let content = ref("")
let price = ref("")
let shop = ref("")
let createTime = ref("")
let updateTime = ref("")
onMounted(() => {
    title = route.query.title
    content = route.query.content
    price = route.query.price
    shop = route.query.shop
    createTime = route.query.createTime
    updateTime = route.query.updateTime
})

</script>

<style lang="scss" scoped>

</style>