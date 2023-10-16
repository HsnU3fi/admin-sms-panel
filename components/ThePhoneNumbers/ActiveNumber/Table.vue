<template>
  <section>
    <client-only>
      <section class="animate__animated animate__fadeInUp">
        <Table ref="multipleTableRef" class="mt-4" :data="tableData">
          <template v-slot:items>
            <el-table-column property="number" label="Number" align="left">
              <template #default="scope">
                <div class="text-left pl-2">
                  <NuxtLink
                    :to="'/phone-numbers/active-numbers/' + scope.row.number"
                    class="text-Primary-b1 cursor-pointer"
                    >{{ scope.row.number }}</NuxtLink
                  >
                  <p>Toll-Free</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column property="friendlyName" label="Friendly Name" />
            <el-table-column label="Capabilities">
              <el-table-column label="VOICE">
                <template #default="scope">
                  <i class="isax isax-mobile text-black text-lg"></i>
                </template>
              </el-table-column>
              <el-table-column label="SMS">
                <template #default="scope">
                  <i class="isax isax-message text-black text-lg"></i>
                </template>
              </el-table-column>
              <el-table-column label="FAX">
                <template #default="scope">
                  <i class="isax isax-printer text-black text-lg"></i>
                </template>
              </el-table-column>
              <el-table-column label="MMS">
                <template #default="scope">
                  <i class="isax isax-presention-chart text-black text-lg"></i>
                </template> </el-table-column
            ></el-table-column>
            <el-table-column property="apps" label="Apps">
              <template #default="scope">
                <section class="flex items-center gap-3">
                  <span
                    class="bg-Gray-b8 hover:bg-Gray-b7 px-3 py-1 text-Gray-b2 rounded-lg"
                    v-for="app in scope.row.apps"
                    >{{ app }}</span
                  >
                </section>
              </template>
            </el-table-column>
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
    id: "1",
    number: "+1959124510",
    friendlyName: "User 1",
    apps: ["Builder"],
  },
  {
    id: "2",
    number: "+1959124510",
    friendlyName: "User 2",
    apps: ["Sms panel", "Voip"],
  },
  {
    id: "3",
    number: "+1959124510",
    friendlyName: "User 3",
    apps: ["Voip", "Builder"],
  },
  {
    id: "4",
    number: "+1959124510",
    friendlyName: "User 4",
    apps: ["Sms panel", "Builder"],
  },
]);

const statusColor = (status) => {
  switch (status) {
    case "paid": {
      return "bg-Success-b3";
    }
    case "in process": {
      return "bg-Primary-b2";
    }
    case "canceled": {
      return "bg-Error-b2";
    }
  }
};
</script>

<style scoped></style>
