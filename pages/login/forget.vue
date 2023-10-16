<template>
  <section class="container">
    <h1 class="text-3xl text-Gray-b7 font-black">Reset Password</h1>
    <p class="mt-2 font-normal text-sm">Enter your login email and we'll send you a link to reset your password.</p>
    <section class="mt-6 sample-form">
      <section class="form-item">
        <label>Email</label>
        <el-input placeholder="example@example.com" v-model="email"/>
      </section>
      <section class="mt-6">
        <el-button class="btn btn-primary w-full" @click="router.push({ path: '/login/forget-success' })">Send</el-button>
      </section>
      <section class="mt-6">
        <el-button class="btn w-full border-none" @click="router.go(-1)">Back</el-button>
      </section>
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})
const router = useRouter()
const email = ref('')
</script>

<style scoped>

</style>