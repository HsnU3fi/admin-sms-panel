<template>
  <section class="">
    <section class="grid grid-cols-1 gap-10 bg-white p-3 rounded-lg">
      <h1 class="text-lg md:text-xl text-Gray-b2 font-bold">
        Add Payment Methods
      </h1>
      <el-tabs
        v-model="activeName"
        class="demo-tabs min-h-[calc(100vh-170px)]"
        @tab-click="handleClick"
      >
        <el-tab-pane label="Payment" name="first"><Payment /></el-tab-pane>
        <el-tab-pane label="Promo code" name="second"
          ><PromoCode
        /></el-tab-pane>
      </el-tabs>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
const activeName = ref("first");
definePageMeta({
  layout: "dashboard",
});
import PromoCode from "@/components/TheWallets/Payment/PromoCode";
import Payment from "@/components/TheWallets/Payment/Payment";
</script>

<style scoped></style>
