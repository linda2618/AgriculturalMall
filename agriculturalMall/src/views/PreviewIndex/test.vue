<template>
    <el-checkbox-group
        v-model="checkedShopInfo"
        @change="handleCheckedShopInfoChange"
        class="check_group"
    >
        <el-checkbox
        v-for="item in shopInfo"
        :key="item.id"
        :value="item.id"
        :label="item.id"
        class="check_item"

        >
        <div class="check_content">
        <div class="car_part">
            <div class="store">{{ detailInfo.store }}</div>
            <div class="divider"></div>
            <div class="main">
                <div class="img">
                    <el-image :src="dataSrc" class="card_img"></el-image>
                    <div>{{ detailInfo.title }}</div>
                </div>
                <div class="content">
                    {{ detailInfo.content }}
                </div>
                <div class="price">
                    {{ detailInfo.price }}
                </div>
                <div class="num">
                    <el-input-number v-model="num" :min="1" :max="10" size="small" @change="handleChange" />
                </div>
            </div> 
        </div>
        </div>

        </el-checkbox
    >
    </el-checkbox-group>
</template>