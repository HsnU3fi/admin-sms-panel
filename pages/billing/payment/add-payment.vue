<template>
  <section>
    <Dashboard title="Add payment method">
      <Tabs v-model="activeTab"/>
    </Dashboard>
  </section>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import Tabs from "@/components/TheBilling/Payment/Add/Tabs";
definePageMeta({
  layout: 'dashboard'
})
const activeTab = ref('credit')
</script>

<style scoped>

</style>