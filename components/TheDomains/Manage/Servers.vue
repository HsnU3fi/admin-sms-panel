<template>

  <Dashboard>
    <template #header="{titleClass}">
      <section class="flex justify-between items-center">
      <h1 :class="titleClass" class="flex items-center gap-1">
        <i class="isax isax-global"/>
        Nameservers
      </h1>
        <el-button class="btn text-Primary" @click="showDialog = true" text>Edit</el-button>
      </section>
    </template>
    <section class="flex items-center justify-between">
      <p class="text-sm text-Gray-b4 font-medium">ns1.softhost.ca</p>
    </section>
    <el-divider class="my-2"/>
    <section>
      <p class="text-sm text-Gray-b4 font-medium">ns2.softhost.ca</p>
    </section>
    <ChangeNameServers v-model="showDialog" />
  </Dashboard>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import ChangeNameServers from './ChangeNameServers'
const showDialog = ref(false)

</script>

<style scoped>

</style>