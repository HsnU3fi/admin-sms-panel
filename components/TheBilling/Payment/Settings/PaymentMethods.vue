<template>
    <section class="animate__animated animate__fadeInUp">
      <Table
          ref="multipleTableRef"
          class="mt-4"
          :data="tableData"
      >
        <template v-slot:items>
          <el-table-column property="details" label="Details"/>
          <el-table-column property="expire" label="Expire date"/>
          <el-table-column property="address" label="Billing address"/>
          <el-table-column property="setup" label="Auto recharge setup">
            <template #default="scope">
              <template v-if="scope.row.setup == true">
                <p class="px-3 bg-Success-b3 bg-opacity-30 rounded-lg text-Success-b4 flex items-center gap-2 py-2 w-fit">
                  <i class="isax isax-tick-circle" />
                  Primary payment method
                </p>
              </template>
            </template>
          </el-table-column>
        </template>
      </Table>
    </section>
</template>

<script setup>
import Table from "@/components/Base/Tables/Sample";
const tableData = ref([
  {
    details: "payment detail",
    expire: "-",
    address: "-",
    setup: true,
  },
])
</script>

<style scoped>

</style>