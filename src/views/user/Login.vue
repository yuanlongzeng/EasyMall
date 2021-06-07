<template>
    <div class="wrapper">
    <van-form @submit="handleLogin">

        <van-field
            class="wrapper__input"
            v-model="email"
            name="邮箱"
            label=""
            placeholder="邮箱"
            :rules="[{ required: true, message: '请填写邮箱' }]"
        />        
        
        <van-field
        class="wrapper__input"
            v-model="password"
            type="password"
            name="密码"
            label=""
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
       
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">登录</van-button>
            <van-button round block type="info" native-type="button" @click="handleRegisterClick">去注册？</van-button>
        </div>
    </van-form>    
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { userLogin } from "@api/user"
import { Toast } from 'vant'

function useLoginEffect() {
  const router=useRouter()
  const dataLogin = reactive({
    username: '',
    password: '',
    password1: '',
    email: '',
    verificationCode: ''
  })

  const handleLogin = async () => {
    userLogin({
        email: dataLogin.email,
        password: dataLogin.password,

    }).then((res: any) => {
        console.log(res)
        Toast('登录成功')
    }).catch((err: any) => {
        Toast("登录失败，请重试")
    })
}

  return { ...toRefs(dataLogin), handleLogin }
}

const useRegisterEffect = () => {
    const router = useRouter()
    const handleRegisterClick = () => {
    router.push({ name: 'Register'})
  }
  return { handleRegisterClick }
}

export default defineComponent({
    name: "Login",
    setup() {
        const { password, email, handleLogin } = useLoginEffect()
        const { handleRegisterClick } = useRegisterEffect()        
        return {
            time: 50,
            password, email, handleLogin, handleRegisterClick
        }
    },
})
</script>


<style lang="scss" scoped>
    .wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &__input {
            // height: 0.48rem;
            &::placeholder {
                color: #777;
            }    
        }
    }
</style>