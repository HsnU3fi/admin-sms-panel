<template>
    <section class="animate__animated animate__fadeInUp auto-recharge">
      <p class="text-sm text-Gray-b2 font-medium">Keep your service running smoothly by automatically setting your account balance to be recharged when it rowns low.</p>
      <section class="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 sample-form py-4">
        <section class="form-item">
          <label>When balance goes below</label>
          <el-input v-model="settings.below" type="number">
            <template #prepend>
              $
            </template>
          </el-input>
        </section>
        <section class="form-item">
          <label>Bring my balance back up to</label>
          <el-input v-model="settings.back" type="number">
            <template #prepend>
              $
            </template>
          </el-input>
        </section>
        <section class="form-item">
          <label>Using this primary payment method</label>
          <el-select v-model="settings.method">
            <el-option v-for="pay in payments" :label="pay" :value="pay" />
          </el-select>
        </section>
        <section class="form-item">
          <label>Or this back up payment method (<span class="text-Gray-b6">Optional</span>)</label>
          <el-select v-model="settings.method">
            <el-option v-for="pay in payments" :label="pay" :value="pay" />
          </el-select>
        </section>
        <section class="flex col-span-full justify-center gap-5">
          <el-button class="btn btn-primary w-32">Save</el-button>
          <el-button class="btn border border-Error-b3 hover:bg-Error-b3 hover:bg-opacity-10 text-Error-b3">Disable auto recharge</el-button>
        </section>
      </section>
    </section>
</template>

<script setup>
import Table from "@/components/Base/Tables/Sample";
const tableData = ref([
  {
    details: "payment detail",
    expire: "-",
    address: "-",
    setup: true,
  },
])
const settings = reactive({
  below: 50,
  back: 100,
  method: ''
})
const payments = ['pay1', 'pay2', 'pay3']

</script>

<style scoped>

</style>