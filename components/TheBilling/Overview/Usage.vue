<template>
  <section class="border p-3 rounded-lg shadow-sm">
    <section class="grid grid-cols-1 gap-4 md:flex items-center justify-between">
      <h1 class="text-base text-Gray-b3 font-bold">Usage Summary</h1>
      <section class="flex items-center justify-between md:justify-start grow-0 sample-form gap-3 my-2">
        <p class="text-xs font-light text-Gray-b6 mt-3">{{ new Date().toDateString() }}</p>
        <section class="form-item">
          <el-select v-model="activeMonth" class="w-32">
            <el-option v-for="item in month" :value="item" :label="item"/>
          </el-select>
        </section>
      </section>
    </section>
    <section class="mt-4">

      <client-only>
        <section class="animate__animated animate__fadeInUp">
          <Table
              ref="multipleTableRef"
              class="mt-4"
              :data="tableData"
          >
            <template v-slot:items>
              <el-table-column property="product" label="Product">
                <template #default="scope">
                  <span :class="[scope.row.product == 'Total' ? 'font-bold' : 'font-light']">
                  {{ scope.row.product }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column property="cost" label="Cost">
                <template #default="scope">
                  <span :class="[scope.row.product == 'Total' ? 'font-bold' : 'font-light']">
                  ${{ scope.row.cost }}
                  </span>
                </template>
              </el-table-column>
            </template>
          </Table>
          <section class="mt-6 flex items-center justify-end">
            <h3 class="text-Primary text-sm font-medium">View all product usage</h3>
          </section>
        </section>
      </client-only>
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