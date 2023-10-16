<template>
  <section class="new-domain">
    <Slider />
    <Configure class="mt-8"/>
  </section>
</template>

<script setup>
import Slider from '@/components/TheDashboard/Slider'
import Configure from "@/components/TheDomains/New/Configure";
definePageMeta({
  layout: 'dashboard'
})
</script>

<style scoped>

</style>