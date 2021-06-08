<template>
  <div class="register">
    <van-form @submit="handleRegister">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="password1"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请再次填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">注册</van-button>
        <van-button round block type="info" native-type="button" @click="handleLoginClick"
          >已注册？</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  import { useRouter } from 'vue-router'
  import { userRegister } from '@api/user'
  import { Toast } from 'vant'

  function useRegisterEffect() {
    const router = useRouter()
    const dataRegister = reactive({
      username: '',
      password: '',
      password1: '',
      email: '',
      verificationCode: ''
    })

    const handleRegister = async () => {
      // const result=await userRegister({
      //     username: dataRegister.username,
      //     password: dataRegister.password,
      //     password1: dataRegister.password1,
      //     email: dataRegister.email,
      //     verificationCode: dataRegister.verificationCode
      // })
      // if (result) {
      //     console.log(result)
      //     Toast('注册成功， 请登录')
      // }
      userRegister({
        username: dataRegister.username,
        password: dataRegister.password,
        password1: dataRegister.password1,
        email: dataRegister.email,
        verificationCode: dataRegister.verificationCode
      })
        .then((res: any) => {
          console.log(res)
          Toast('注册成功， 请登录')
        })
        .catch((err: any) => {
          Toast('验证码错误，请重试')
        })
    }

    return { ...toRefs(dataRegister), handleRegister }
  }

  const useLoginEffect = () => {
    const router = useRouter()
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return { handleLoginClick }
  }

  export default defineComponent({
    name: 'Register',
    setup() {
      const { username, password, password1, email, verificationCode, handleRegister } =
        useRegisterEffect()
      const { handleLoginClick } = useLoginEffect()
      return {
        time: 50,
        username,
        password,
        password1,
        email,
        verificationCode,
        handleRegister,
        handleLoginClick
      }
    }
  })
</script>

<style lang="scss" scoped></style>
