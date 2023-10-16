<template>
  <section class="sample-form buy-number">
    <Dashboard title="">
      <template #header="{ titleClass }">
        <section class="flex items-center justify-between gap-5 mb-2">
          <h1 :class="titleClass">Buy a Number</h1>
        </section>
        <section class="flex">
          <section>
            <label class="text-gray-900 text-base mb-1">Country</label>
            <div class="form-item max-w-[250px] relative">
              <i
                class="isax isax-search-normal-1 absolute z-50 top-3 right-5"
              />
              <el-input v-model="country" class="pr-3"></el-input>
            </div>
          </section>
          <section>
            <label class="text-gray-900 text-base mb-1">Capabilities</label>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="Voice" />
              <el-checkbox label="SMS" />
              <el-checkbox label="MMS" />
              <el-checkbox label="Fax" />
            </el-checkbox-group>
          </section>
        </section>
        <section class="mt-4 form-item max-w-[600px]">
          <div class="flex gap-2 items-end">
            <div class="w-full">
              <label class="text-gray-900 text-base mb-1"
                >Search criteria</label
              >
              <el-select v-model="number" placeholder="Local Numbers">
                <el-option
                  v-for="item in numberOptions"
                  :value="item"
                  :label="item"
                  :key="item"
                />
              </el-select>
            </div>
            <el-input placeholder="Search by digits or pharases" />
            <div class="w-full">
              <label class="text-gray-900 text-base mb-1">Match to</label>
              <el-select
                v-model="numberFirstPart"
                placeholder="First part of number"
              >
                <el-option
                  v-for="item in numberFirstPartOptions"
                  :value="item"
                  :label="item"
                  :key="item"
                />
              </el-select>
            </div>

            <el-button class="btn btn-primary max-h-[42px]">
              <i class="isax isax-search" />
              Search
            </el-button>
          </div>
        </section>
        <section class="my-4">
          <el-collapse class="border-[1px] px-2 rounded-lg" v-model="collapse">
            <el-collapse-item title="Advanced Search">
              <section>
                <label class="text-gray-900 text-base mb-1">Number Type</label>
                <el-checkbox-group v-model="NumberType">
                  <el-checkbox label="Local" />
                  <el-checkbox label="Mobile" />
                </el-checkbox-group>
              </section>

              <div class="w-full form-item max-w-[160px]">
                <label class="text-gray-900 text-base mb-1 block mt-4"
                  >Address Requirement</label
                >
                <el-select v-model="address" placeholder="Address">
                  <el-option
                    v-for="item in addressOptions"
                    :value="item"
                    :label="item"
                    :key="item"
                  />
                </el-select>
              </div> </el-collapse-item
          ></el-collapse>
        </section>
      </template>
      <Table :collapse="collapse.length" />
    </Dashboard>
  </section>
</template>

<script setup>
import Table from "@/components/ThePhoneNumbers/BuyNumber/Table";
import Dashboard from "@/components/Base/Card/Dashboard";
import { ref } from "vue";
definePageMeta({
  layout: "dashboard",
});
const number = ref("");
const country = ref("");
const checkList = ref([]);
const NumberType = ref([]);
const address = ref("");
const collapse = ref([]);
const numberOptions = [
  "+1 866 503 8484",
  "+1 877 322 2639",
  "+1 866 503 8484",
  "+1 988 501 1132",
];
const numberFirstPart = ref("");
const numberFirstPartOptions = [
  "First part of Number",
  "Anywhere in number",
  "Last part of number",
];
const addressOptions = [
  "Newfoundland and Labrador",
  "Alberta",
  "Saskatchewan",
  "Prince Edward Island",
  "British Columbia",
  " Manitoba",
  "New Brunswick",
  "Nova Scotia",
  "Quebec",
  "Ontario",
];
</script>

<style scoped></style>
