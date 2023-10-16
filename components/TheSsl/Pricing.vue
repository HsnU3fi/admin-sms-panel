<template>
  <Dashboard>
    <template #header="{titleClass}">
      <p class="text-center text-sm text-Primary-b2 font-bold">Our Popular</p>
      <h2 class="mt-4 text-base lg:text-lg font-bold text-Primary text-center">Pricing</h2>
    </template>
    <section>
      <section class="flex justify-center gap-5 items-center">
        <span class="px-3 py-1 rounded-lg text-xs md:text-sm lg:px-5 lg:py-2" v-for="tab in tabs" @click="activeTab = tab"
              :class="[activeTab == tab ? 'bg-Primary-b2 text-white' : 'bg-Gray-b7 text-Gray-b2']">
          {{ tab }}
        </span>
      </section>
      <section class="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
        <section class="border border-Gray-b7 rounded-lg grow" v-for="plan in plans">
          <section class="p-3 bg-Gray-b8 pb-14">
          <h2 class="text-center text-base lg:text-lg font-bold">{{ plan.name }}</h2>
          </section>
          <section class="border-t-2 border-Primary-b3 p-3">
            <section class="flex justify-center -mt-14">
              <section class="w-20 h-20 rounded-full bg-Primary-b2 flex justify-center items-center grow-0">
                <h2 class="text-white text-base font-normal">${{ plan.price }}/mo</h2>
              </section>
            </section>
            <section class="mt-4">
              <p class="text-sm text-Gray-b3 text-center">{{ plan.description }}</p>
              <el-divider class="my-3"/>
              <p class="text-sm text-Gray-b3 text-center">Number of domains: 1</p>
              <el-divider class="my-3"/>
              <p class="text-sm text-Gray-b3 text-center">Subdomain: {{ plan.subdomain ? 'YES': 'NO' }}</p>
              <section class="mt-6 flex justify-center">
                <el-button class="btn btn-primary">BUT NOW</el-button>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  </Dashboard>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'

const tabs = ref(['Single Domain', 'Wildcard Certificate', 'Multi-domain Certificate'])
const activeTab = ref('Single Domain')
const plans = ref([
  {name: 'DV SSL', price: 8, description: 'Domain Validated', subdomain: false},
  {name: 'OV SSL', price: 12, description: 'Domain Validation Wildcard', subdomain: false},
  {name: 'EV SSL', price: 15, description: 'Organization Validated', subdomain: true},
])

// watcher
watch(activeTab, (value) => {
  let random = Math.random()
  for (let i=0; i<plans.value.length; i++) {
    plans.value[i].price = Math.floor(random * (i+1) * 15)
  }
})
</script>

<style scoped>

</style>