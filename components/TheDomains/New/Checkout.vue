<template>
  <section class="new-domain-checkout">
    <Dashboard>
      <template #header="{titleClass}">
        <section class="flex items-center gap-2">
          <i class="isax isax-global text-lg"></i>
          <h2 :class="titleClass">Register Domain Names</h2>
        </section>
      </template>
      <section>
        <client-only>
          <Tabs v-model:activeStep="activeStep"/>
          <section class="grid grid-cols-1 gap-5 mt-6 items-start lg:grid-cols-5">
            <section class="lg:col-span-3">
              <section class="p-3 rounded-lg border border-Gray-b7">
                <h2 class="text-lg font-bold text-Gray-b2 flex items-center gap-1">
                  <i class="isax isax-user-octagon text-3xl"/>
                  Welcome alber
                </h2>
              </section>
              <section class="p-3 rounded-lg border border-Gray-b7 mt-4">
                <h2 class="text-base text-Gray-b2 font-bold">
                  Payment method
                </h2>
                <section class="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <section v-for="method in paymentMethods" class="border p-3 border-Gray-b7 rounded-lg"
                           @click="activeMethod = method.id" :class="[activeMethod == method.id ? 'bg-white border-Primary' : 'bg-Gray-b8']">
                    <template v-if="method.image">
                      <img :src="method.image" class="w-24 mx-auto"/>
                    </template>
                    <template v-else-if="method.text">
                      <h2 class="text-lg text-Gray-b2 text-center font-bold">{{ method.text }}</h2>
                    </template>
                  </section>
                </section>
                <el-divider class="my-5"/>
                <section class="grid grid-cols-1 gap-10 sample-form md:grid-cols-2 pb-4">
                  <section class="form-item col-span-full">
                    <label>Card number</label>
                    <el-input v-model="card.number" type="number" />
                  </section>
                  <section class="form-item">
                    <label>Expire date</label>
                    <el-date-picker v-model="card.number" class="w-full" />
                  </section>
                  <section class="form-item">
                    <label>Cvv</label>
                    <el-input v-model="card.cvv" type="number" class="w-full"/>
                  </section>
                  <section class="form-item col-span-full">
                    <el-button class="btn btn-primary w-full py-3">
                      Complete order
                    </el-button>
                  </section>
                </section>
              </section>
            </section>
            <Summary class="lg:col-span-2"/>
          </section>
        </client-only>
      </section>
    </Dashboard>
  </section>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import Tabs from "./Tabs";
import Summary from "./Summary";

const activeStep = ref('Checkout')
const checkbox = ref(true)
const activeMethod = ref('1')
const paymentMethods = ref([
  {id: '1', image: '/assets/images/logo/visa.svg'},
  {id: '2', image: '/assets/images/logo/paypal.svg'},
  {id: '3', text: 'Cheque'},
  {id: '4', text: 'Write transfer / interac'},
])
const card = reactive({
  number: '',
  expire: '',
  cvv: ''
})
</script>

<style scoped>
</style>