<template>
  <section class="grid grid-cols1 lg:grid-cols-2 gap-6">
    <Settings />
    <Servers />
    <DomainForwarding/>
    <EmailForwarding/>
    <ContactInformation class="col-span-full" />
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})
import Settings from '@/components/TheDomains/Manage/Settings'
import Servers from '@/components/TheDomains/Manage/Servers'
import DomainForwarding from '@/components/TheDomains/Manage/DomainForwarding'
import EmailForwarding from '@/components/TheDomains/Manage/EmailForwarding'
import ContactInformation from '@/components/TheDomains/Manage/ContactInformation'
</script>

<style scoped>

</style>