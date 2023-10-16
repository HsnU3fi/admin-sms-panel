<template>
  <section>
    <Dashboard title="">
      <template #header="{titleClass}">
        <section class="flex items-center justify-between gap-5">
          <h1 :class="titleClass">Billing overview</h1>
          <el-button class="btn btn-primary" @click="router.push({ path: '/billing/payment/add-fund' })">Add fund</el-button>
        </section>
      </template>
    <Body/>
    </Dashboard>
  </section>
</template>

<script setup>
import Body from '@/components/TheBilling/Overview/Body'
import Dashboard from '@/components/Base/Card/Dashboard'
definePageMeta({
  layout: 'dashboard'
})
const router = useRouter()
</script>

<style scoped>

</style>