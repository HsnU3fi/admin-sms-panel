<template>
  <section>
    <Dashboard>
      <template #header="{titleClass}">
        <section class="flex items-center gap-2">
          <i class="isax isax-global text-lg"></i>
          <h2 :class="titleClass">Register Domain Names</h2>
        </section>
      </template>
      <section>
        <client-only>
        <Tabs  v-model:activeStep="activeStep"/>
        <section class="mt-4">
        <el-input type="textarea" v-model="name" placeholder="Type one domain per line" rows="5"/>
        <el-button :loading="isLoading" @click="doSearch" class="mt-4 btn btn-primary w-9/12 md:w-6/12 mx-auto w-full">Search</el-button>
        </section>
        <section class="mt-6">
          <section v-if="results.length">
            <h1 class="text-base lg:text-lg text-Gray-b2 font-bold">Search result</h1>
            <p class="mt-2 text-Gray-b3 font-normal text-xs lg:text-sm">
              {{ isFind ? 1 : 0}} of
              {{ results.length }} domains are avlable
            </p>
            <el-divider class="my-4" />
            <section class="grid grid-cols-1">
              <template v-if="!isFind">
                <section class="bg-Error-b3 bg-opacity-20 px-4 py-3 flex items-center gap-3">
                  <h2 class="text-sm lg:text-base text-Gray-b2">{{ name }}.com</h2>
                  <p class="ml-auto text-xs text-Error-b3">Not Avilable</p>
                </section>
              </template>
              <section class="border border-Gray-b7 border-opacity-40 px-4 py-3 flex items-center gap-3" v-for="result in results">
                <h2 class="text-sm lg:text-base text-Gray-b2">{{ result.title }}</h2>
                <p class="ml-auto text-base text-Gray-b3">${{ result.price }}</p>
                <el-button class="border border-Primary text-Primary">Add to cart</el-button>
              </section>
            </section>
            <section class="flex items-center justify-center mt-4">
              <el-button class="btn btn-primary bg-Primary-b2">
                <i class="isax isax-arrow-right-1" />
                Continue ({{ isFind ? 1 : 0}})
              </el-button>
            </section>
          </section>
        </section>
        </client-only>
      </section>
    </Dashboard>
  </section>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import Tabs from "./Tabs";
const name = ref('')
const isLoading = ref(false)
const isFind = ref(false)
const results = ref([])
const activeStep = ref('Domain')
const doSearch = ()=> {
  results.value = []
  isLoading.value = true
  setTimeout(()=> {
    isLoading.value = false
    isFind.value = false
    results.value = []
    let random = Math.random()
    if (random > 0.7) {
      isFind.value = true
      results.value = [
        {
          title: `${name.value}.com`,
          price: Math.floor(random * 50)
        }
      ]
    }
    else {
      let domains = ['.org', '.biz', '.sm', '.games', '.fitness']
      domains.forEach(domain=>{
        let random = Math.random()
        results.value.push(
          {
            title: `${name.value + domain}`,
            price: Math.floor(random * 50)
          }
        )
      })
    }
  }, 1500)
}
</script>

<style scoped>

</style>