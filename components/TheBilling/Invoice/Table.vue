<template>
  <section>
  <client-only>
    <section class="animate__animated animate__fadeInUp">
    <Table
        ref="multipleTableRef"
        class="mt-4"
        :data="tableData"
    >
      <template v-slot:items>
        <el-table-column property="index" label="#" width="80"/>
        <el-table-column property="orderId" label="Order Id">
          <template #default="scope">
            <section class="flex items-center gap-2 justify-center">
              <section class="w-12 h-12 rounded-full flex items-center justify-center bg-Gray-b8">
                <i class="isax isax-tick-circle text-xl" />
              </section>
              <section>
                <h2 class="text-sm text-Gray-b6 font-normal">Orders ID</h2>
                <p class="font-bold text-base text-Gray-b2">#{{ scope.row.orderId }}</p>
              </section>
            </section>
          </template>
        </el-table-column>
        <el-table-column property="date" label="Date"/>
        <el-table-column property="customer" label="Customer"/>
        <el-table-column property="price" label="Amount"/>
        <el-table-column property="status" label="Status" width="80">
          <template #default="scope">
            <span :class="statusColor(scope.row.status)" class="block px-3 py-2 text-sm text-white rounded-xl">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <Dropdown>
          <template v-slot:items>
            <el-dropdown-menu class="table-dropdown">
              <el-dropdown-item @click="handlerQuestionDialog(scope.$index, scope.row)">
                <i class="isax isax-eye"/>
                Show
              </el-dropdown-item>
              <el-dropdown-item @click="handlerQuestionDialog(scope.$index, scope.row)">
                <i class="isax isax-document-download"/>
                Download
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </Dropdown>
      </template>
    </Table>
    </section>
  </client-only>
  </section>
</template>

<script setup>
import Table from "@/components/Base/Tables/Sample";
import Dropdown from "@/components/Base/Tables/Dropdown";

const tableData = ref([
  {
    index: "1",
    orderId: "8495",
    date: "27 Aug 2020 11:02 AM",
    items: 3,
    customer: '@isabellasava',
    price: '$144.15',
    status: 'paid',
  },
  {
    index: "1",
    orderId: "8495",
    date: "27 Aug 2020 11:02 AM",
    items: 3,
    customer: '@isabellasava',
    price: '$144.15',
    status: 'in process',
  },
  {
    index: "1",
    orderId: "8495",
    date: "27 Aug 2020 11:02 AM",
    items: 3,
    customer: '@isabellasava',
    price: '$144.15',
    status: 'canceled',
  },
]);

const statusColor = (status) => {
  switch (status) {
    case "paid" : {
      return 'bg-Success-b3'
    }
    case "in process" : {
      return 'bg-Primary-b2'
    }
    case "canceled" : {
      return 'bg-Error-b2'
    }
  }
}
</script>

<style scoped>

</style>