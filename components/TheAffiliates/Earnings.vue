<template>
  <section>
    <section class="flex items-center justify-center">
      <section class="grid grid-cols-1 gap-5 w-10/12 md:w-8/12">
        <template v-for="(item, index) in items">
          <el-divider class="my-0"/>
          <section class="flex justify-center gap-5">
            <h3 class="text-sm lg:text-base text-Gray-b2 font-bold text-right grow">{{ index }}:</h3>
            <p class="text-sm lg:text-base text-Gray-b3 font-bold w-24">${{ item }}</p>
          </section>
        </template>
      </section>
    </section>
    <section class="flex items-center justify-center mt-6">
    <el-button class="btn btn-primary">
      <i class="isax isax-bank text-2xl"/>
      Request Withdrawal
    </el-button>
    </section>
    <p class="text-center mt-4 text-xs lg:text-sm text-Gray-b6">
      You will be able to request a withdrawal as soon as your balance reaches the minimum required amount of $25.00.
    </p>
  </section>
</template>

<script setup>
const items = reactive({
  'Commissions Pending Maturation': 8,
  'Available Commissions Balance': 10,
  'Total Amount Withdrawn': 18
})
</script>

<style scoped>

</style>