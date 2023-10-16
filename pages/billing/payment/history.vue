<template>
  <section>
    <Dashboard title="Payment history">
      <Table />
    </Dashboard>
  </section>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import Table from "@/components/TheBilling/Payment/HistoryTable";
definePageMeta({
  layout: 'dashboard'
})
</script>

<style scoped>

</style>