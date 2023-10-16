<template>
  <section>
    <Dashboard>
      <template #header="{ titleClass }">
        <section class="flex items-center justify-between">
          <h1 :class="titleClass">Payment settings</h1>
          <el-button @click="router.push({ path: 'add-payment'})" class="btn btn-primary">Add payment method</el-button>
        </section>
      </template>
      <Tabs v-model="activeTab" />
    </Dashboard>
  </section>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import Tabs from "@/components/TheBilling/Payment/Settings/Tabs";
definePageMeta({
  layout: 'dashboard'
})
const router = useRouter()
const activeTab = ref('Methods')
</script>

<style scoped>

</style>