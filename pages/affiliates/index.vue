<template>
  <section class="new-domain">
    <Slider />
    <Status class="mt-6" />
    <Tabs class="mt-10 p-3 bg-white rounded-lg" />
  </section>
</template>

<script setup>
import Slider from '@/components/TheDashboard/Slider'
import Status from '@/components/TheAffiliates/Status'
import Tabs from '@/components/TheAffiliates/Tabs'
definePageMeta({
  layout: 'dashboard'
})
</script>

<style scoped>

</style>