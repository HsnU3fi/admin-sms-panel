<template>
  <section class="border p-3 rounded-lg shadow-sm">
    <section class="flex items-center gap-2">
      <h1 class="text-base text-Gray-b3 font-bold">Settings</h1>
      <h3 class="text-Primary text-sm font-medium">Edit billing information</h3>
    </section>
    <section class="mt-4">
      <h2 class="text-sm text-Gray-b3 font-medium">
        Billing address
        <br>
        (For taxation purposes)
      </h2>
      <h2 class="text-sm text-Gray-b3 font-medium mt-4">
        4950 young street, suite 2200
        <br>
        toronto, on, M2N 6K1
        <br>
        Canada
      </h2>
    </section>
  </section>
</template>

<script setup>
import Table from "@/components/Base/Tables/Sample";

const month = ['May 2023', 'April 2023', 'June 2023']
const activeMonth = ref('May 2023')
const tableData = ref([
  {
    product: "Total",
    cost: 65.815,
  },
  {
    product: "Sms panel",
    cost: 20,
  },
  {
    product: "Business phone system",
    cost: 17.34,
  },
  {
    product: "Phone numbers",
    cost: 15.25,
  },
  {
    product: "Website builder",
    cost: 13.225,
  },
])
</script>

<style scoped>

</style>