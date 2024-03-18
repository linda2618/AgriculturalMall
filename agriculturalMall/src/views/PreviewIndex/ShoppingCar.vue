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
        <div class="shop_content">
          <div 
            class="shop_checkbox"
          >
            <input
              id="checkAll"
              type="checkbox"
              class="check_all"
              @click="handleCheckedShopInfoChange"
            />全选
             <div class="content">
                <span>店铺</span>
                <span class="mia">描述</span>
                <span class="price">价格</span>
                <span class="num">数量</span>
                <span class="option">操作</span>
              </div>
              <div class="divider"></div>
              <div
                id="checkItem"
              >
                <div
                  class="check_group"
                  v-for="item in shopInfo"
                  :key="item.id"
                  :value="item.id"
                  :label="item.id"
                >
                <!-- 全选 -->
                <input 
                  class="store"
                  type="checkbox" 
                  name="store" 
                  :value="item.store">
                {{ item.store }}
                  <br/>
                  <div class="main">
                    <div class="img">
                      <el-image :src="dataSrc" class="card_img"></el-image>
                      <div class="title">{{ item.title }}</div>
                    </div>
                    <div class="content">
                        {{ item.content }}
                    </div>
                    <div class="price">
                        ￥{{ item.price }}
                    </div>
                    <div class="num">
                        <el-input-number v-model="num" :min="1" size="small" @change="handleChange" />
                    </div>
                    <div class="delete">
                      删除
                    </div>
                  </div>
                <div class="divider"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <!-- 结算栏 -->
      <div class="account">
        <div class="buy">
          立即购买
        </div>
        <div class="select_acc"> 
          已选商品 <span  class="red">{{ 0 }} </span> 件
          合计：<span class="red"> 0.00</span>
          <el-button
          class="sua"
            :type="hasMer ? 'warning' : 'info'" round
          >
          结算
          </el-button
          >
        </div>    
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue"
import { Search } from '@element-plus/icons-vue'
// import CarComponent from '@/components/CarComponent.vue'
const search = ref("")
const hasMer = ref(false);
const checkAll = ref(false)
const isIndeterminate = ref(true)

const checkedShopInfo = ref([])
const num = ref(1)
let selectItems = ref({})
let selectAll = ref({})

// 使用假数据！！！
const shopInfo = [
  { id: 0, store: "雪里里美妆店1", title: "指甲油11指甲油11指甲油11指甲油11指甲油11", content: "小冰块水性指小冰块水性指小冰块水性指甲油免照灯快干可撕拉", price: '10.99', num: 3 },
  { id: 1, store: "雪里里美妆店2", title: "指甲油12指甲油12", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '9.99', num: 1},
  { id: 2, store: "雪里里美妆店3", title: "指甲油12指甲油12指甲油12", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '12.99', num: 3},
  { id: 3, store: "雪里里美妆店4", title: "指甲油14", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '30.99', num: 1},
  // { id: 4, store: "雪里里美妆店5", title: "指甲油15", content: "指尖DIY的快乐 RAINOLOGY雨辑小冰块水性指甲油免照灯快干可撕拉", price: '3.99', num: 23},
 ]


 // 全选/取消全选 事件
const handleCheckedShopInfoChange = (value) => {

  for (var i = 0; i < selectItems.length; i++) {
    selectItems[i].checked = selectAll.checked;
  }
}

const goBack = () => { }

const handleChange = (value) => {
  console.log(value, '选中几个')
}

onMounted(() => {
  selectItems = document.getElementById('checkItem').getElementsByTagName('input')
  selectAll = document.getElementById('checkAll')

  //全部选中复选框
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].onclick = () => {
      var flag = true;
      for (let j = 0; j < selectItems.length; j++) { 
        if (!selectItems[j].checked) {
          flag = false;
          break;
        }
      }
      selectAll.checked = flag
    }
  }

})

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
    }

    .shop_content {
      
      background-color: #fff;
      border-radius: 20px;
      
      .shop_checkbox {
        margin: 0 20px;

        .content{
          margin: 10px 20px;
          display: flex;
          .mia {
            margin-left: 28%;
          }
          .price {
            margin-left: 26%;
          }
          .num {
            margin-left: 14%;
          }
          .option {
            margin-left: 12%;
          }
        }

        .check_all {
          margin-top: 20px;
        }
        .store {
          margin-top: 24px;
        }

        .main {   
            padding: 10px 20px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #e6e3e3;
            .img {
              width: 22%;
                display: flex;
                align-items: center;
                font-size: 13px;;
                .card_img {
                    min-width: 70px;
                    height: 80px;
                    margin-right: 4px;
                    margin-bottom: 8px;
                }

                .title {
                  width: 100px;
                  min-width: 60px;
                  margin-left: 5px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  // 三行换行后省略
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  word-break: break-all;
                }
            }

            .content{
                overflow: hidden;
                text-overflow: ellipsis;
                width: 20%;
                color:#6d6d6d;
                font-size: 12px;
                // 三行换行后省略
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                word-break: break-all;
            }
            .price {
                font-weight: bold;
                color: rgb(230, 23, 23);
            }
            .delete {
              cursor: pointer;
              font-size: 13px;
              color: rgb(96, 96, 95);
            }
        }
      }
    }

  }

  .account {
    z-index: 999;
    display: flex;
    position: fixed;
    left: 160px;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    .buy {
      margin-left: 20px;
      color: rgb(218, 76, 76);
      font-size: 18px;

    }

    .select_acc {
      position: absolute;
      right: 200px;

      .sua {
        margin-left: 30px;
      }

    }
  }
}
</style>
