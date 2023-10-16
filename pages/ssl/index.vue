<template>
  <section class="new-domain">
    <Slider />
    <Header class="mt-6" />
    <Cards class="mt-10 md:mt-16" />
    <Pricing class="mt-10 md:mt-16" />
    <Ads class="mt-10 md:mt-16" />
    <Header class="mt-10 md:mt-16" />
    <Faq class="mt-10 md:mt-16" />
  </section>
</template>

<script setup>
import Slider from '@/components/TheDashboard/Slider'
import Header from '@/components/TheSsl/Header'
import Cards from '@/components/TheSsl/Cards'
import Faq from '@/components/TheSsl/Faq'
import Pricing from '@/components/TheSsl/Pricing'
import Ads from "@/components/TheDomains/Ads";
definePageMeta({
  layout: 'dashboard'
})
</script>

<style scoped>

</style>