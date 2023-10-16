<template>
  <section class="container">
    <h1 class="text-3xl text-Gray-b7 font-black">Sign Up</h1>
    <p class="mt-2 font-normal text-sm">Already have an account?<nuxt-link to="/sign-up" class="text-Primary-b1 hover-animation">Log In</nuxt-link> </p>
    <section class="mt-10 sample-form grid grid-cols-1 gap-8">
      <section class="form-item">
        <label>Email</label>
        <el-input v-model="login.email"/>
      </section>
      <section class="form-item">
        <label>Password</label>
        <el-input v-model="login.password" type="password" show-password/>
      </section>
      <section class="form-item">
        <label>Password again</label>
        <el-input v-model="login.passwordAgain" type="password" show-password/>
      </section>
      <section class="form-item">
        <el-button class="btn btn-primary w-full" @click="router.push({ path: '/dashboard' })">Sign Up</el-button>
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
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})
const router = useRouter()
const login = ref({
  email: '',
  password: '',
  passwordAgain: '',
  remember: true
})
</script>

<style scoped>

</style>