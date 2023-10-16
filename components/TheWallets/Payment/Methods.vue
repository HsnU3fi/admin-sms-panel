<template>
  <section>
    <p class="text xs md:text-sm text-Gray-b6">02</p>
    <h1 class="text-lg md:text-xl text-Gray-b2 font-bold">Payment Details</h1>
    <el-divider class="mt-2 mb-4" />
    <section class="flex items-center gap-5">
      <section class="bg-white py-2 px-5 h-12 border rounded-xl flex items-center gap-2 grow-0" v-for="method in methods"
               :class="[activeMethod == method ? 'border-Primary' : 'border-Gray-b6']" @click="activeMethod = method">
        <img :src="`/assets/images/logo/${method}.svg`" class="w-6"/>
        <p class="text-sm lg:text-base text-Gray-b2 font-bold">{{ method }}</p>
      </section>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sample-form mt-6">
      <section class="form-item">
        <label>Card number</label>
        <el-input v-model="payment.cardNumber" />
      </section>
      <section class="form-item">
        <label>Expiry date</label>
        <el-input v-model="payment.expireDate" />
      </section>
      <section class="form-item">
        <label>CCV/CVV</label>
        <el-input v-model="payment.cvv" />
      </section>
    </section>
  </section>
</template>

<script setup>
const activeMethod = ref('paypal')
const methods = ref(['paypal', 'credit card'])
const payment = reactive({
  cardNumber: '',
  expireDate: '',
  cvv: ''
})
</script>

<style scoped>

</style>