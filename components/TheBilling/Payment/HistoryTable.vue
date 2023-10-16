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
        <el-table-column property="id" label="Invoice ID" />
        <el-table-column property="date" label="Date"/>
        <el-table-column property="app" label="App">
          <template #default="scope">
            <span class="bg-Gray-b8 hover:bg-Gray-b7 px-3 py-1 text-Gray-b2 rounded-lg">{{ scope.row.app }}</span>
          </template>
        </el-table-column>
        <el-table-column property="status" label="Status" width="80">
          <template #default="scope">
            <span :class="statusColor(scope.row.status)" class="block px-3 py-1 text-white rounded-lg">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <Dropdown>
          <template v-slot:items>
            <el-dropdown-menu class="table-dropdown">
              <el-dropdown-item
                  @click="handlerQuestionDialog(scope.$index, scope.row)"
              >
                <i class="isax isax-eye"/>
                Preview
              </el-dropdown-item>
              <el-dropdown-item
                  @click="handlerQuestionDialog(scope.$index, scope.row)"
              >
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
    id: '5523',
    amount: 70,
    date: '27 Aug 2020 11:02 AM',
    app: 'Voip',
    status: 'Done',
  },
  {
    index: "1",
    id: '5523',
    amount: 70,
    date: '27 Aug 2020 11:02 AM',
    app: 'Voip',
    status: 'Canceled',
  },
  {
    index: "1",
    id: '5523',
    amount: 70,
    date: '27 Aug 2020 11:02 AM',
    app: 'Voip',
    status: 'Done',
  },
  {
    index: "1",
    id: '5523',
    amount: 70,
    date: '27 Aug 2020 11:02 AM',
    app: 'Voip',
    status: 'Done',
  },
]);

const statusColor = (status) => {
  switch (status) {
    case "Done" : {
      return 'bg-Success-b3'
    }
    case "Canceled" : {
      return 'bg-Error-b2'
    }
  }
}
</script>

<style scoped>

</style>