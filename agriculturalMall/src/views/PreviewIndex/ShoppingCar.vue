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
        <div>
          <div>店铺</div>
          <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
          >全选
          </el-checkbox>
          <el-checkbox-group
            v-model="checkedShopInfo"
            @change="handleCheckedShopInfoChange"
          >
            <el-checkbox
              v-for="item in shopInfo"
              :key="item.id"
              :value="item.id"
              :label="item.id"
            >
              <div>
                {{item.store }}
                {{item.content }}
                {{item.price }}
                {{item.num }}
              </div>   
            </el-checkbox
          >
        </el-checkbox-group>
        </div>
        <div>
          123
          <!-- <CarComponent></CarComponent> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue"
import { Search } from '@element-plus/icons-vue'
import CarComponent from '@/components/CarComponent.vue'
const search = ref("")
const hasMer = ref(false);
const checkAll = ref(false)
const isIndeterminate = ref(true)

const checkedShopInfo = ref([])
// 使用假数据！！！
const shopInfo = [
  { id: 0, store: "雪里里美妆店1", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '10.99', num: 3},
  { id: 1, store: "雪里里美妆店2", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '9.99', num: 1},
  { id: 2, store: "雪里里美妆店3", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '12.99', num: 3},
  { id: 3, store: "雪里里美妆店4", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '30.99', num: 1},
  { id: 4, store: "雪里里美妆店5", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '3.99', num: 23},
]


const handleCheckAllChange = (val) => {
  console.log(val,'val')
  checkedShopInfo.value = val ? shopInfo.map(item => { return item.id }) : []
  // console.log(checkedShopInfo.value)
  isIndeterminate.value = false
}
const handleCheckedShopInfoChange = (value) => {
  console.log(value,'value')
  const checkedCount = value.length
  checkAll.value = checkedCount === shopInfo.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < shopInfo.length
}

const goBack = () => {}


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
