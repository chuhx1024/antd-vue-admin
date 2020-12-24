<template>
    <section class="login-main">
        <section class="login-content">
            <a-row type="flex">
                <a-col :span="12">
                    <section class="login-left">
                        <h3 class="login-title">Welcome</h3>
                        <h1 class="login-text">Antd Vue Admin</h1>
                        <p class="login-img">
                            <img src="@/assets/logo.png" alt="">
                        </p>
                    </section>
                </a-col>
                <a-col :span="12" >
                    <section class="login-right" >
                        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules">
                            <a-form-model-item has-feedback  prop="username">
                                <a-input v-model="ruleForm.username" type="text" autocomplete="off" @keydown="keyDown">
                                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-model-item>
                            <a-form-model-item has-feedback prop="password">
                                <a-input v-model="ruleForm.password" type="password" autocomplete="off" @keydown="keyDown">
                                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-model-item>
                            <a-checkbox >
                                记住密码
                            </a-checkbox>
                            <a-form-model-item >
                                <a-button
                                    type="primary"
                                    @click="login('ruleForm')"
                                    :loading="loading"
                                >
                                    登录
                                </a-button>
                            </a-form-model-item>
                        </a-form-model>
                    </section>
                </a-col>
            </a-row>
        </section>
    </section>
</template>
<script>
import { login, getInfo } from '@/api/user'
import { setToken } from '@/utils/handleCookie'
export default {
    name: 'Login',
    data () {
        return {
            loading: false,
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        }
    },
    methods: {
        keyDown (e) {
            e.keyCode == 13 && this.login()
        },
        login () {
            this.$refs.ruleForm.validate(async valid => {
                if (valid) {
                    const { data } = await login(this.ruleForm)
                    const { status } = data
                    if (!status) {
                        this.$message.success('登录成功 欢迎')
                        setToken(data.data.token)
                        getInfo(data.data.token)
                        this.$router.push('/')
                    } else {
                        this.$message.error(data.msg)
                    }
                }
            })
        },
    },
}
</script>
<style lang="less" scoped>
.login-main {
    height: 100vh;
    width: 100vw;
    background:url('../../assets/img/login_bg.png') no-repeat;
    background-size:100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-content {
        width: 888px;
        margin-bottom: 150px;
        .login-left {
            background-color: rgba(0,0,0,.5);
            height: 100%;
            padding: 40px 0;
            text-align: center;
            .login-title {
                font-size: 36px;
                color: pink;
            }
            .login-text {
                font-size: 44px;
                color: pink;
                margin: 0;
            }
            .login-img {
                padding-top: 20px;
                img {
                    height: 22px;
                }
            }
        }
        .login-right {
            background-color: #fff;
            height: 100%;
            padding: 30px 80px 0;
            /deep/.ant-form-item {
                margin-bottom: 20px;
            }
            /deep/.ant-input {
                height: 45px;
                padding-left: 40px;
                font-size: 16px;
            }
            /deep/.ant-checkbox-wrapper {
                float: left;
            }
            /deep/.ant-btn-primary {
                width: 100%;
                margin-top: 25px;
                height: 40px;
            }
            /deep/.ant-form-explain{
                padding-top: 10px;
            }
        }
    }
}
</style>
