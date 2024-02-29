<template>
  <div>
    <HomeView></HomeView>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

</script>

<style lang="scss" scoped>

</style>