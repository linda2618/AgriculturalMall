<template>
    <div>
        <el-card
            style="max-width: 330px; padding: 0px"
            shadow="hover"
        >
            <div class="card_container">
                 <div>
                    <el-image :src="dataSrc" class="card_img"></el-image>
                </div>
                <div class="card_content">
                    <span class="title">{{ title }}</span>
                    <br/>
                    <span class="content">{{ content }}</span>
                    <br/>
                    <span class="price"> {{ `￥${price}` }}</span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
    // detailInfo: {
    //     type: Object,
    //     default: {},
    // },
    dataSrc: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
    content: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: "0",
    },

})

</script>

<style lang="scss" scoped>

.card_container {
    display: flex;
    background-color:rgba(247, 249, 250);

    ::v-deep .el-card__body,
    ::v-deep .el-card {
        padding: 8px;
    }
    
    .card_img {
        width: 128px;
        height: 140px;
    }

    .card_content {
        position: relative;
        margin-left: 10px;
        margin-top: 10px;
        cursor: pointer;

        .title {
            font-weight: bold;
        }

        .price {
            font-size: 16px;
            color: red;
        }
        .content {
            font-size: 12px;
            padding-top: 10px;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3; /* 超出几行省略 */
            overflow: hidden;       
        }
        .content:hover {
            color: hsla(160, 100%, 37%, 1);
        }

        .price {
            position: absolute;
            top: 112px;
        }
    }
   
}
</style>