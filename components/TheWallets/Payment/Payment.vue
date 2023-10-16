<template>
  <div class="flex">
    <div class="sample-form w-1/2">
      <label class="font-bold text-sm text-Gray-b2"
        >How much would you like to add your account balance today?</label
      >
      <section class="form-item my-4">
        <label class="font-bold text-sm text-Gray-b2">Payment Amount</label>
        <el-input v-model="state.amount" class="mb-4 max-w-[194px]" />
        <label class="font-medium text-sm text-Gray-b4"
          >Enter an amount between $5 and $2,000</label
        >
      </section>
      <section class="form-item my-4">
        <label class="font-bold text-sm text-Gray-b2"
          >Select a payment method</label
        >
        <div class="flex flex-col gap-4">
          <el-select v-model="method" class="max-w-[394px]">
            <el-option
              v-for="item in methodOptions"
              :value="item"
              :label="item"
              :key="item"
            />
          </el-select>
          <a href="javascript:void(0)" class="text-Primary-b1"
            >+ add new payment method</a
          >
        </div>
      </section>
      <el-button class="bg-Primary text-white rounded-lg max-w-[170px]"
        >Add to my balance</el-button
      >
    </div>
    <div class="max-w-[394px] w-1/2 border-[1px] rounded-lg p-3 h-fit">
      <h3 class="text-lg fony-bold py-2">Overview</h3>
      <h6
        v-for="(item, index) in overviewOptions"
        :key="index"
        class="flex justify-between py-3 text-sm"
        :class="index < 2 ? 'border-b-[1px]' : ''"
      >
        {{ item.label }}<span class="font-bold">{{ item.value }}</span>
      </h6>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//state

const state = ref({
  amount: 0,
  method: "",
});

const methodOptions = ["Lorem 1", "Lorem 2", "Lorem 3", "Lorem 4"];
const overviewOptions = ref([
  {
    label: "Current balance",
    value: "$59.36",
  },
  {
    label: "Payment amount",
    value: "$0.00",
  },
  {
    label: "New balance",
    value: "$59.36",
  },
]);
</script>

<style lang="scss" scoped></style>
