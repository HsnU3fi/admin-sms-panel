<template>
  <section class="sample-form">
    <Dashboard title="">
      <template #header="{ titleClass }">
        <section class="flex items-center justify-between gap-5 mb-2">
          <h1 :class="titleClass">Active Numbers</h1>
          <el-button
            class="btn btn-primary"
            @click="router.push({ path: '/phone-numbers/buy-number' })"
            >Buy a Number</el-button
          >
        </section>
        <InfoBox :state="infoOptions" />
        <section class="mt-4 form-item max-w-[450px]">
          <label class="text-gray-900 text-base mb-1">Inventory Filters</label>
          <div class="flex gap-2">
            <el-select v-model="number" placeholder="Local Numbers">
              <el-option
                v-for="item in numberOptions"
                :value="item"
                :label="item"
                :key="item"
              />
            </el-select>
            <el-input />

            <el-button class="btn btn-primary max-h-[42px]">
              <i class="isax isax-filter" />
              Filter
            </el-button>
          </div>
        </section>
      </template>
      <Table />
    </Dashboard>
  </section>
</template>

<script setup>
import InfoBox from "@/components/Base/InfoBox/InfoBox.vue";
import Table from "@/components/ThePhoneNumbers/ActiveNumber/Table.vue";
import Dashboard from "@/components/Base/Card/Dashboard";
import { ref } from "vue";
definePageMeta({
  layout: "dashboard",
});
const router = useRouter();
const infoOptions = ref({
  header: "Guied",
  options: [
    {
      label:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    },
    {
      label:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and pu",
    },
    {
      label: "print, and publishing industries used in the graphic, ",
    },
  ],
});
const number = ref("");
const numberOptions = [
  "+1 866 503 8484",
  "+1 877 322 2639",
  "+1 866 503 8484",
  "+1 988 501 1132",
];
</script>

<style scoped></style>
