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
          <Tabs v-model:activeStep="activeStep"/>
          <section class="grid grid-cols-1 gap-5 mt-6 items-start lg:grid-cols-5">
            <section class="lg:col-span-3">
              <section class="p-3 rounded-lg border border-Gray-b7">
                <section class="flex items-center gap-2">
                  <i class="isax isax-global"/>
                  <h2 class="text-base text-Gray-b2 font-bold">Alibaba.com</h2>
                  <el-button class="btn ml-auto" text>
                    <i class="isax isax-trash"/>
                  </el-button>
                </section>
                <section class="mt-4 flex items-center justify-between">
                  <section>
                    <h1 class="text-sm font-medium text-Gray-b2">Domain transfer</h1>
                    <p class="mt-2 text-xs font-light text-Gray-b4">Domain will renew @ $17.44/year</p>
                  </section>
                  <section class="text-right">
                    <span class="block-inline px-4 py-2 rounded-lg bg-Secondary-b2 text-Gray-b2 text-xs">28% off</span>
                    <p class="mt-2 font-light text-sm text-Gray-b4"><b class="text-Gray-b2">$12.99</b> first year</p>
                  </section>
                </section>
                <section class="mt-4 flex bg-Gray-b8 rounded-lg">
                  <section class="px-5 bg-Gray-b4 rounded-l-lg flex items-center">
                    <i class="isax isax-eye-slash text-white"/>
                  </section>
                  <section class="p-3 w-1 grow">
                    <el-checkbox v-model="checkbox" label="Product your personal information on your domain. $9.99/year"
                                 size="large" class="w-full"/>
                  </section>
                </section>
              </section>
              <section class="p-3 rounded-lg border border-Gray-b7 mt-4">
                <h2 class="text-base text-Gray-b2 font-bold">
                  <i class="isax isax-box"/>
                  Recomended domains essentials
                </h2>
                <section class="mt-4 grid grid-cols-1 gap-6 md:flex">
                  <template v-for="(item, index) in items">
                    <section class="p-3">
                      <section class="text-center">
                        <i class="isax text-3xl text-Error-b3" :class="item.icon"/>
                        <h1 class="mt-3 text-base font-bold text-Gray-b2">{{ item.title }}</h1>
                        <p class="mt-4 text-sm text-Gray-b4 font-medium md:h-24">{{ item.text }}</p>
                        <span class="mt-4 block w-fit mx-auto bg-Secondary-b2 rounded-lg p-2 text-Gray-b2">Free 30-Day trial</span>
                        <el-button class="mt-4 inline-flex mx-auto btn btn-primary"><i class="isax isax-shopping-cart"/>Free
                          trial
                        </el-button>
                        <p class="mt-4 text-sm text-Gray-b4 font-medium">Then <b>{{ item.price }}</b>/mo</p>
                      </section>
                    </section>
                    <el-divider direction="vertical" class="h-auto m-0" v-if="index + 1 < items.length"/>
                  </template>
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
const activeStep = ref('Configure')
const checkbox = ref(true)
const items = ref([
  {
    icon: 'isax-bill',
    title: 'Web Hosting',
    text: 'For professional hosting with Wordpress, email and more',
    price: '12.99'
  },
  {
    icon: 'isax-link-1',
    title: 'Site builder',
    text: 'Build beatiful, effective websites with an easy drag-drop tool',
    price: '4.99'
  },
  {
    icon: 'isax-sms',
    title: 'Business email',
    text: 'Up to @yourdomain emails to promote your brand and look professional',
    price: '6.99'
  },
])
</script>

<style scoped>
</style>