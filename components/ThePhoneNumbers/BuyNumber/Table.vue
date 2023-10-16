<template>
  <section>
    <client-only>
      <section class="animate__animated animate__fadeInUp">
        <Table ref="multipleTableRef" class="mt-4" :data="tableData">
          <template v-slot:items>
            <el-table-column property="number" label="Number" align="left" />
            <el-table-column property="type" label="type" />
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
            <el-table-column property="address" label="Address Requirement"
              ><template #default="scope">
                {{ props.collapse ? scope.row.address : "-" }}
              </template></el-table-column
            >
            <el-table-column property="monthlyFee" label="Monthly Fee" />
            <el-table-column>
              <template #default="scope">
                <button class="px-8 py-2 rounded-md border-[1px]" type="button">
                  Buy
                </button>
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
    type: "Local",
    monthlyFee: "$5",
    address: "In publishing and graphic design,",
    apps: ["Builder"],
  },
  {
    id: "2",
    number: "+1959124510",
    type: "Local",
    monthlyFee: "$15",
    address: "In publishing and graphic design,",
    apps: ["Sms panel", "Voip"],
  },
  {
    id: "3",
    number: "+1959124510",
    type: "Local",
    monthlyFee: "$50",
    address: "In publishing and graphic design,",
    apps: ["Voip", "Builder"],
  },
  {
    id: "4",
    number: "+1959124510",
    type: "Local",
    monthlyFee: "-",
    address: "In publishing and graphic design,",
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
// collapse
const props = defineProps({
  collapse: {
    default: 0,
  },
});
</script>

<style scoped></style>
