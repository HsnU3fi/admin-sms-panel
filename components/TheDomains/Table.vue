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
        <el-table-column property="title" label="Domain" />
        <el-table-column property="expire" label="Expire">
          <template #default="scope">
            <section class="flex items-center gap-2">
              <span class="text-Gray-b6 text-xs font-bold">{{ scope.row.expire }}d</span>
              <el-progress class="w-24" :show-text="false" :percentage="expirePercent(scope.row.expire)" :color="customColors" />
            </section>
          </template>
        </el-table-column>
        <el-table-column property="apps" label="Apps">
          <template #default="scope">
            <section class="flex items-center gap-3">
              <span class="bg-Gray-b8 hover:bg-Gray-b7 px-3 py-1 text-Gray-b2 rounded-lg" v-for="app in scope.row.apps">{{ app }}</span>
            </section>
          </template>
        </el-table-column>
        <el-table-column property="status" label="Status" width="95">
          <template #default="scope">
            <span :class="statusColor(scope.row.status)" class="py-1 px-3 rounded-lg text-white block">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <Dropdown>
          <template v-slot:items>
            <el-dropdown-menu class="table-dropdown">
              <el-dropdown-item
                  @click="handlerQuestionDialog(scope.$index, scope.row)"
              >
                <i class="isax isax-trash"/>
                Delete
              </el-dropdown-item>
              <el-dropdown-item
                  @click="handlerQuestionDialog(scope.$index, scope.row)"
              >
                <i class="isax isax-link-1"/>
                Show
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
    title: 'specefic-test.com',
    apps: ['Voip'],
    expire: 15,
    status: 'connected'
  },
  {
    index: "1",
    title: 'specefic-test.com',
    apps: ['Voip', 'Builder'],
    expire: 300,
    status: 'in process'
  },
  {
    index: "1",
    title: 'specefic-test.com',
    apps: ['Builder', 'Sms panel'],
    expire: 0,
    status: 'expired'
  },
  {
    index: "1",
    title: 'specefic-test.com',
    apps: ['Builder', 'Sms panel', 'Voip'],
    expire: 50,
    status: 'connected'
  },
  {
    index: "1",
    title: 'specefic-test.com',
    apps: ['Builder', 'Sms panel', 'Voip'],
    expire: 110,
    status: 'connected'
  },
]);

const customColors = [
  { color: '#990A0A', percentage: 20 },
  { color: '#FFA311', percentage: 40 },
  { color: '#116DFF', percentage: 60 },
  { color: '#1DCC0E', percentage: 80 },
  { color: '#16990A', percentage: 100 },
]

const statusColor = (status) => {
  switch (status) {
    case "connected" : {
      return 'bg-Success-b3'
    }
    case "in process" : {
      return 'bg-Primary-b2'
    }
    case "expired" : {
      return 'bg-Error-b2'
    }
  }
}
const expirePercent = (percent) =>{
  if (percent == 0) {
    return 0
  }
  else if (percent < 20) {
    return 20
  }
  else if (percent < 60) {
    return 40
  }
  else if (percent < 120) {
    return 60
  }
  else if (percent > 120) {
    return 100
  }
}
</script>

<style scoped>

</style>