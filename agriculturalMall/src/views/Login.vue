<template>
    <div id="login_container">
        <div class="login_panel">
            <el-card title="登录">
                <el-form :model="admin" :rules="rules">
                    <el-form-item path="account" label="账号">
                        <el-input v-model:value="admin.account" placeholder="请输入账号" />
                    </el-form-item>
                    <el-form-item path="password" label="密码">
                        <el-input v-model:value="admin.password" type="password" placeholder="请输入密码" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <el-checkbox v-model:checked="admin.remember" label="记住我" />
                    <el-button @click="login">登录</el-button>
                    <el-button @click="goBack">返回</el-button>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import { AdminStore } from '../store/index.js'
import { useRoute, useRouter } from 'vue-router';

const axios = inject("axios")
const message = inject("message")
const adminStore = AdminStore()
const router = useRouter()

const rules = {
    account: [
        { required: true, message: "请输入账号", trigger: 'blur' },
        { min: 5, max: 12, message: "账号长度5~12个字符", trigger: 'blur' }
    ],
    password: [
        { required: true, message: "请输入密码", trigger: 'blur' },
        { min: 5, max: 12, message: "账号长度5~12个字符", trigger: 'blur' }
    ]
}
const admin = reactive({
    account: localStorage.getItem("account") || "",
    password: localStorage.getItem("password") || "",
    remember: localStorage.getItem("remember") == 1 || false
})
const login = async () => {
    const data = {
        account: admin.account,
        password: admin.account
    }
    let result = await axios.post('/admin/login', {
        account: admin.account,
        password: admin.password,
    })
    // console.log(result)
    if (result.data.code == 200) {
        //登录成功后 把账号 id token 存储到全局的store里面
        adminStore.token = result.data.data.token
        adminStore.account = result.data.data.account
        adminStore.id = result.data.data.id
        if (admin.remember) {
            localStorage.setItem("account", admin.account)
            localStorage.setItem("password", admin.password)
            localStorage.setItem("remember", admin.remember ? 1 : 0)
        }
        message.info("登录成功")
        router.push("/dashboard")

    } else {
        message.error("登录失败")

    }
}
const goBack = () => {
    router.push('/')
}

</script>

<style lang="scss" scoped>
#login_container {
    height: 100%;
    overflow: hidden;
    background: url(../../public/R.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.login_panel {
    width: 500px;
    margin: 250px auto;
    opacity: .8;
}

.n-button {
    margin-right: 30px;
}
</style>