<template>
  <section>
    <section class="bg-white p-3 rounded-lg">
      <h1 class="text-base lg:text-lg font-bold text-Gray-b2">Users</h1>
      <el-divider/>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-4">
        <Voip/>
        <UserPanel/>
        <Cloud/>
        <Builder/>
      </section>
    </section>
  </section>
</template>

<script setup>
import Voip from '@/components/TheReports/Voip'
import UserPanel from '@/components/TheReports/UserPanel'
import Cloud from '@/components/TheReports/Cloud'
import Builder from '@/components/TheReports/Builder'

definePageMeta({
  layout: 'dashboard'
})
</script>

<style scoped>

</style>