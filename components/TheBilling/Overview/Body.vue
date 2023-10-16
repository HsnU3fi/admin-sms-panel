<template>
  <section class="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
    <Information class="col-span-full lg:col-span-3" />
    <Setting class="col-span-full lg:col-span-2" />
    <Usage class="col-span-full lg:col-span-3" />
    <Payment class="col-span-full lg:col-span-2" />
  </section>
</template>

<script setup>
import Information from "./Information";
import Usage from "./Usage";
import Setting from "./Setting";
import Payment from "./Payment";
const month = ['May 2023', 'April 2023', 'June 2023']
const reportType = ['PDF', 'EXCEL', 'WORD']
const invoiceReport = reactive({
  month: '',
  type: ''
})
</script>

<style scoped>

</style>