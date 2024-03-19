<template>
    <!-- 头像 -->
   <div class="avatar_header">
        <el-avatar
            class="avatar"
            :size="50"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div class="avatar_name">
            <div>
                <span class="name"> {{ '大壮妹妹爱魔芋' }} </span>
                <span class="name">
                ( {{ 'lindazhuang' }})
                </span>
            </div>
            <div class="explain">
                Your personal profile
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <!-- 个人信息表单 -->
    <div>
        <el-form :model="form" label-width="auto" style="max-width: 600px; margin: 40px 20px;">
            <el-form-item label="昵称">
            <el-input v-model="form.name" />
            </el-form-item>
            <el-upload
                v-model:file-list="fileList"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :limit="2"
                :on-exceed="handleExceed"
                :on-change="handleChange"
                style="margin-left: 70px; margin-bottom: 20px;"
            >
                <el-button type="primary">上传头像</el-button>
                <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
                </template>
            </el-upload>
            <el-form-item label="英文名">
            <el-input v-model="form.englishName" />
            </el-form-item>
            <el-form-item label="收货地址">
            <el-input v-model="form.address" type="textarea" />
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="onSubmit">修改</el-button>
            <el-button>取消</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

//上传头像
const fileList = ref([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handlePreview = (uploadFile) => {
  console.log(uploadFile, 'update')
}
const handleExceed= () => {
  ElMessage.warning(
    `只限制一222张哦~`
  )
}
const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `确认取消 ${uploadFile.name} 的传输?`
  ).then(
    () => true,
    () => false
  )
}
const handleRemove = (file, uploadFiles) => {
    fileList.value = []
    console.log('remove')
}
const handleChange = (uploadFile, uploadFiles) => {
    console.log('上传文件！', uploadFile, uploadFiles)
//   fileList.value = fileList.value.slice(-3)
}

const onSubmit = () => {
  console.log('submit!')
}

</script>

<style lang="scss" scoped>
.avatar_header {
    display: flex;
    vertical-align: bottom;

    .avatar {
        margin: 20px;
    }
    .avatar_name {
        margin-top: 37px;

        .name {
            margin: 0 auto;
            text-align: center;
        }
        .explain {
            font-size: 12px;
        }

    }
   
}


</style>