<template>
  <section>
  <client-only>
    <section class="animate__animated animate__fadeInUp">
    <h2 class="text-sm lg:text-base text-Gray-b3 font-normal">Devices</h2>
    <Table
        ref="multipleTableRef"
        class="mt-4"
        :data="tableData"
    >
      <template v-slot:items>
        <el-table-column property="index" label="#" width="80"/>
        <el-table-column property="device" label="Device Name"/>
        <el-table-column property="date" label="Last login"/>
        <el-table-column property="hasLogin" label="Still login">
          <template #default="scope">
            <template v-if="scope.row.hasLogin">
              <b class="inline-block py-2 px-5 rounded-full bg-Success-b3 text-white">True</b>
            </template>
            <template v-else>
              <b class="inline-block py-2 px-5 rounded-full bg-Error-b3 text-white">False</b>
            </template>
          </template>
        </el-table-column>
        <Dropdown>
          <template v-slot:items>
            <el-dropdown-menu class="table-dropdown">
              <el-dropdown-item
                  @click="handlerQuestionDialog(scope.$index, scope.row)"
              >
                <i class="isax isax-trash"/>
                Terminate
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
    device: "Iphone 13 Pro max",
    date: "2022/08/22",
    hasLogin: false,
  },
  {
    index: "2",
    device: "Mozilla",
    date: "2022/08/22",
    hasLogin: true,
  },
  {
    index: "3",
    device: "Chrome 15.2.1",
    date: "2022/08/22",
    hasLogin: true,
  },
]);
</script>

<style scoped>

</style>