<template>
  <section class="border p-3 rounded-lg shadow-sm">
    <h1 class="font-medium text-base text-Gray-b2">Billing information</h1>
    <section class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
      <section>
        <h2 class="text-sm text-Gray-b3 font-bold">Current balance</h2>
        <p class="mt-3 text-base font-bold text-Success-b3">+ $59.6532</p>
        <el-button class="btn btn-primary mt-3 text-sm">Add found</el-button>
      </section>
      <section class="sample-form">
        <h2 class="text-sm text-Gray-b3 font-bold">Auto recharge</h2>
        <section class="flex items-center mt-4 gap-5">
          <h3 class="text-sm">
            <i class="isax isax-tick-circle text-Success-b3"/>
            Enabled
          </h3>
          <h3 class="text-sm text-Primary">
            Edit autorecharge settings
          </h3>
        </section>
        <h2 class="text-sm text-Gray-b3 font-bold mt-6">Invoice</h2>
        <section class="flex items-center my-4 gap-2 form-item">
          <el-select v-model="invoiceReport.month">
            <el-option v-for="item in month" :label="item" :value="item"/>
          </el-select>
          <el-select v-model="invoiceReport.type">
            <el-option v-for="item in reportType" :label="item" :value="item"/>
          </el-select>
          <el-button class="btn text-Primary mt-3 border-none">Download</el-button>
        </section>
      </section>
    </section>

  </section>
</template>

<script setup>
const month = ['May 2023', 'April 2023', 'June 2023']
const reportType = ['PDF', 'EXCEL', 'WORD']
const invoiceReport = reactive({
  month: '',
  type: ''
})
</script>

<style scoped>

</style>