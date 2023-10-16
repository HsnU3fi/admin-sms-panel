<template>
  <section>
    <section class="grid grid-cols-1 gap-10">
      <section class="animate__animated animate__backInLeft">
        <Value />
      </section>
      <Methods class="animate__animated animate__backInLeft" />
      <Application class="animate__animated animate__backInLeft" />
    </section>
  </section>
</template>

<script setup>
import Methods from '@/components/TheWallets/Payment/Methods'
import Value from '@/components/TheWallets/Payment/Value'
import Application from "@/components/TheBilling/Payment/Application";
definePageMeta({
  layout: 'dashboard'
})
</script>

<style scoped>

</style>