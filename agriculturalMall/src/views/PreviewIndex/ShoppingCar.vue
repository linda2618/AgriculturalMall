<template>
  <div class="shopCar">
    <!-- 购物车 -->
    <div class="w">
      <!-- 搜索 -->
      <div class="search">
        <span>你喜欢?</span>
        <el-input
          v-model="search"
          style="width: 50%; height: 40px; margin-top: 6px"
          placeholder="搜索"
          :prefix-icon="Search"
          class="search_input"
        />
        <el-button
          type="success"
          plain
          style="width: 50px; height: 40px; margin-top: 6px"
          @click="goBack"
          >返回</el-button
        >
      </div>
      <!-- 主体 -->
      <div class="shop_main">
        <div class="shop_merchandise">
          <div>购物车 （全部 {{ 185 }}）</div>
          <div>
            已选商品 <span class="price"> 0.00</span>
            <el-button :type="hasMer ? 'warning' : 'info'" round
              >结算</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";

const hasMer = ref(false);
</script>

<style lang="scss" scoped>
.shopCar {
  height: 100%;
  background-color: #f2f1f1;

  .search {
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-top: 20px;
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

  .shop_main {
    width: 100%;

    .shop_merchandise {
      display: flex;
      padding: 0 20px;
      justify-content: space-between;
      height: 60px;
      line-height: 60px;
      margin: 10px auto;
      background-color: #fff;
      border-radius: 20px;

      .price {
        
      }
    }
  }
}
</style>
