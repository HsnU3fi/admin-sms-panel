<template>
  <section>
    <Dashboard title="Invoices">
      <Table />
    </Dashboard>
  </section>
</template>

<script setup>
import Table from '@/components/TheBilling/Invoice/Table'
import Dashboard from '@/components/Base/Card/Dashboard'
definePageMeta({
  layout: 'dashboard'
})
const router = useRouter()
</script>

<style scoped>

</style>