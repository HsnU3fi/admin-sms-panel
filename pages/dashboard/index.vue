<template>
  <section class="mt-6">
    <Slider />
    <section class="bg-white p-5 rounded-lg mt-4">
      <h1 class="text-base lg:text-lg text-Gray-b2 font-bold">Reports</h1>
      <el-divider/>
      <Table />
      <AmountChart class="mt-10" />
    </section>
  </section>
</template>

<script setup>
import Table from '@/components/TheDashboard/DevicesTable'
import AmountChart from '@/components/TheDashboard/AmountChart'
import Slider from '@/components/TheDashboard/Slider.vue'
definePageMeta({
  layout: 'dashboard'
})

</script>

<style scoped>

</style>