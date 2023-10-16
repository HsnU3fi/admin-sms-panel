<template>
  <div class="sample-form">
    <label class="font-bold text-sm text-Gray-b2"
      >Do you have promo code you could use?</label
    >
    <section class="form-item my-4">
      <label class="font-bold text-sm text-Gray-b2">Promo code</label>
      <el-input v-model="state.amount" class="mb-4 max-w-[294px]" />
    </section>
    <el-button class="bg-Primary text-white rounded-lg max-w-[170px]"
      >Add to my balance</el-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

//state

const state = ref({
  code: "",
});
</script>

<style lang="scss" scoped></style>
