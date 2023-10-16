<template>
  <section class="container">
    <img src="/assets/images/login/success.png" class="w-64 mx-auto">
    <h1 class="mt-4 text-3xl text-Gray-b7 font-black">Your reset password link was sent</h1>
    <p class="mt-2 font-normal text-sm">Use the link that we emailed you to create your new password.</p>
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