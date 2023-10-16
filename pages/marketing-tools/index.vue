<template>
  <section>
    <section class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <Dashboard class="" :title="item" v-for="item in items">
        <section class="px-3">
          <section class="px-5 py-2 rounded-lg text-base text-Gray-b2 font-normal bg-Primary bg-opacity-20 flex items-center gap-4">
            <p class="text-xs md:text-sm text-Gray-b2 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem id iure labore modi omnis qui voluptas? Accusantium, eveniet, libero! Asperiores assumenda atque deleniti dolores eligendi id nesciunt nulla velit.
            </p>
            <el-button class="btn btn-primary bg-transparent border border-Primary rounded text-Primary">Visit</el-button>
          </section>
        </section>
      </Dashboard>
    </section>
  </section>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
definePageMeta({
  layout: 'dashboard'
})
const items = ref([
  'Email marketing',
  'Content Marketing',
  'Seo',
  'Bulk sms marketing',
  'Banner advertising',
  'Social media marketing',
  'Google ads',
  'Google shopping Tools',
  'Online courses marketplace',
  'Earn points system',
  'Linkee Landing',
  'Online Booking&reservation system',
])
</script>

<style scoped>

</style>