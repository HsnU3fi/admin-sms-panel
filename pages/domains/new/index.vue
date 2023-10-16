<template>
  <section class="new-domain">
    <Slider />
    <Register class="mt-8"/>
  </section>
</template>

<script setup>
import Slider from '@/components/TheDashboard/Slider'
import Register from "@/components/TheDomains/New/Register";
definePageMeta({
  layout: 'dashboard'
})
</script>

<style scoped>

</style>