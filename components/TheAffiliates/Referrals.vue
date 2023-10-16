<template>
  <section>
    <section class="animate__animated animate__fadeInUp">
      <Table
          ref="multipleTableRef"
          class="mt-4"
          :data="tableData"
      >
        <template v-slot:items>
          <el-table-column property="index" label="#" width="80"/>
          <el-table-column property="signup" label="Signup Date"/>
          <el-table-column property="product" label="Product/Service"/>
          <el-table-column property="amount" label="Amount"/>
          <el-table-column property="commission" label="Commission"/>
          <el-table-column property="status" label="Status"/>
        </template>
      </Table>
    </section>
  </section>
</template>

<script setup>
import Table from "@/components/Base/Tables/Sample";
import Dropdown from "@/components/Base/Tables/Dropdown";

const tableData = ref([
  {
    index: "1",
    signup: "2022/08/22",
    product: "Domain",
    amount: '$50',
    commission: "Domain",
    status: "Done",
  },
  {
    index: "1",
    signup: "2022/08/22",
    product: "Domain",
    amount: '$50',
    commission: "Domain",
    status: "Done",
  },
  {
    index: "1",
    signup: "2022/08/22",
    product: "Domain",
    amount: '$50',
    commission: "Domain",
    status: "In Process",
  },
]);
const statusColor = (status) => {
  switch (status) {
    case "Done" : {
      return 'bg-Success-b3'
    }
    case "In Process" : {
      return 'bg-Primary-b2'
    }
    case "expired" : {
      return 'bg-Error-b2'
    }
  }
}
</script>

<style scoped>

</style>