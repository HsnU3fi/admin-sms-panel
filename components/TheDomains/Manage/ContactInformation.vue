<template>

  <Dashboard>
    <template #header="{titleClass}">
      <section class="flex justify-between items-center">
      <h1 :class="titleClass" class="flex items-center gap-1">
        <i class="isax isax-user-octagon"/>
        Contact Information
      </h1>
      <el-button class="btn text-Primary" text>
        Edit
      </el-button>
      </section>
    </template>
    <section>
      <InfoBox :state="state" />
      <section class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
        <section v-for="item in items">
          <h2 class="text-base font-bold text-Gray-b2">{{ item }}</h2>
          <p class="mt-3 text-Gray-b4 font-medium text-sm">mm</p>
          <section class="mt-4">
            <p class="mt-3 text-Gray-b4 text-sm font-medium">richarmond hill</p>
            <p class="mt-3 text-Gray-b4 text-sm font-medium">L4E3M7 CA</p>
          </section>
        </section>
      </section>
    </section>
  </Dashboard>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import InfoBox from "@/components/Base/InfoBox/InfoBox";
const state = reactive({
  header: '',
  options: [
    { label: 'play by the rules: Keep your WHOIS information valid and up-to-date. Evry adjustment to the registrant"s contact. information locks the domain for 60 days, blocking the domain from being transfrred or any other information from being changed. Invalid information culd also lead to loosing your domain' }
  ]
})
const items = ref(['Registrant contact', 'Admin contact', 'Technical contact'])

</script>

<style scoped>

</style>