<template>
  <section class="animate__animated animate__fadeInUp auto-recharge">
    <p class="text-sm text-Gray-b2 font-medium">
      Keep your service running smoothly by reciving email notiffication when your account balance runns low.Emails will
      be sent to users with owner, adminstrator, and billing roles.
      <br>
      Manage user roles <span class="text-Primary underline">Here</span>
    </p>
    <InfoBox class="mt-4" :state="infoBox"/>
    <section class="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 sample-form py-4">
      <section class="form-item">
        <label>Send me an email when my balance goes below</label>
        <el-input v-model="settings.below" type="number">
          <template #prepend>
            $
          </template>
        </el-input>
      </section>
      <section class="flex col-span-full justify-start gap-5">
        <el-button class="btn btn-primary w-32">Continue</el-button>
      </section>
    </section>
  </section>
</template>

<script setup>
import Table from "@/components/Base/Tables/Sample";
import InfoBox from "@/components/Base/InfoBox/InfoBox";
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
const infoBox = {
  header: 'Sends an email when your balance goes below $5',
  options: [
    { label: 'Change the default setting here, if you would like it to send before tour balance goes below $5'}
  ]
}
</script>

<style scoped>

</style>