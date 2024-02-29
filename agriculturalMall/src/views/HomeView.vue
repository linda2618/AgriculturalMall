<template>
    <div>
      <WelcomeItem></WelcomeItem>
      <nav>
        <RouterLink to="/login" class="cheNav">登录注册 <el-icon class="icon"><QuestionFilled /></el-icon></RouterLink>
        <RouterLink to="/about" class="cheNav">关于此网站<el-icon class="icon"><Right /></el-icon></RouterLink>
      </nav>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'

import WelcomeItem from '@/components/WelcomeItem.vue'

</script>

<style lang="scss" scoped>

  nav {
    margin-left: 300px;
    .cheNav {
      cursor: pointer;
      border-radius: 5px;
      margin-right: 30px;
      font-size: 17px;
      border: 1px solid #ccc;

      .icon {
        padding-top: 10px;
      }
    }
    .cheNav :hover {
      background-color: green;
     }
  }
</style>
