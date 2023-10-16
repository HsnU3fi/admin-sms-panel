<template>
  <section class="container">
    <h1 class="text-3xl text-Gray-b7 font-black">Login</h1>
    <p class="mt-2 font-normal text-sm">Already have an account?<nuxt-link to="/sign-up" class="text-Primary-b1 hover-animation">Log In</nuxt-link> </p>
    <el-form ref="loginForm" :model="login" status-icon :rules="loginFormRules">
    <section class="mt-10 sample-form grid grid-cols-1 gap-8">
      <section class="form-item">
        <label>Email</label>
        <el-form-item prop="email">
        <el-input v-model="login.email"/>
        </el-form-item>
      </section>
      <section class="form-item">
        <label>Password</label>
        <el-form-item prop="password">
        <el-input v-model="login.password" type="password" show-password/>
        </el-form-item>
        <section class="mt-4 flex items-center justify-between">
          <el-checkbox v-model="login.remember" label="Remember me" />
          <nuxt-link to="/login/forget" class="text-sm text-Gray-b2 font-normal hover-animation">Forget Password?</nuxt-link>
        </section>
      </section>
      <section class="form-item">
        <el-button :loading="isLoading" class="btn btn-primary w-full" @click="loginSubmitted">Log In</el-button>
      </section>
      <section class="mt-6 flex items-center gap-3">
        <hr class="grow border-t border-Gray-b6">
        <span class="font-medium text-base text-Gray-b6">Or</span>
        <hr class="grow border-t border-Gray-b6">
      </section>
      <section class="mt-6 form-item grid grid-cols-1 gap-3">
        <a href="#" class="p-2 rounded-lg border border-Gray-b7 hover:border-Primary w-full flex justify-center gap-2">
          <img src="/assets/images/login/google.png" class="w-6" />
          <span class="text-base text-Gray-b2 font-medium">Continue with Google</span>
        </a>
        <a href="#" class="p-2 rounded-lg border border-Gray-b7 hover:border-Primary w-full flex justify-center gap-2">
          <img src="/assets/images/login/facebook.png" class="w-6" />
          <span class="text-base text-Gray-b2 font-medium">Continue with Facebook</span>
        </a>
        <a href="#" class="p-2 rounded-lg border border-Gray-b7 hover:border-Primary w-full flex justify-center gap-2">
          <img src="/assets/images/login/apple.png" class="w-6" />
          <span class="text-base text-Gray-b2 font-medium">Continue with Apple</span>
        </a>
      </section>

    </section>
    </el-form>
  </section>
</template>

<script setup>
import {useLoginStore} from "@/store/login";
definePageMeta({
  layout: 'login'
})
const router = useRouter()
const loginForm = ref('')
const isLoading = ref(false)
const loginStore = useLoginStore()

const login = ref({
  email: 'super-admin-new@auth.com',
  password: '123456',
  remember: true
})
const loginFormRules = reactive({
  email: [
    { required: true, message: 'Email field is required', trigger: 'blur', type: 'email'}
  ],
  password: [
    { required: true, message: 'Password field is required', trigger: 'blur', type: 'string'}
  ],
})
const loginSubmitted = async () => {
  if (!loginForm.value) {
    return
  }
  await loginForm.value.validate(async (value, fields) => {
    if (value) {
      isLoading.value = true
      const result = await loginStore.login(login.value)
      const isRegistered = await loginStore.setTokensToCookie(result.data.value)
      isLoading.value = false
      if (isRegistered) {
        router.push({ path: '/dashboard'})
      }
    }
  })
}
</script>

<style scoped>

</style>
