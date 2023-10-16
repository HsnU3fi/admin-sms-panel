<template>
  <section>
    <section class="bg-white p-4 rounded-lg animate__animated animate__fadeInUp">
      <h1 class="text-base lg:text-lg font-bold text-Gray-b2">Wallets</h1>
      <el-divider />
      <Wallets />
    </section>
    <section class="bg-white p-4 rounded-lg mt-6 ">
      <h1 class="text-base lg:text-lg font-bold text-Gray-b2">Transactions</h1>
      <el-divider />
      <Transactions />
    </section>
  </section>
</template>

<script setup>
import Wallets from "@/components/TheWallets/Wallets";
import Transactions from "@/components/TheWallets/Transactions";
definePageMeta({
  layout: 'dashboard'
})
</script>

<style scoped>

</style>