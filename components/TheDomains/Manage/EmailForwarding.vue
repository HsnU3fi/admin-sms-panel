<template>

  <Dashboard>
    <template #header="{titleClass}">
      <section class="flex gap-2 items-center">
      <h1 :class="titleClass" class="flex items-center gap-1">
        <i class="isax isax-sms-edit"/>
        Email Forwarding
      </h1>
        <p class="text-Gray-b4 font-medium">0/3</p>
      <el-button class="btn text-Primary ml-auto" text @click="showDialog=true">
        Add
      </el-button>
      </section>
    </template>
    <section class="flex items-center justify-between">
      <p class="text-sm text-Gray-b4 font-medium">Easily redirect your email's from your domain to another email</p>
    </section>
    <AddEmailForwarding v-model="showDialog" />
  </Dashboard>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import AddEmailForwarding from './AddEmailForwarding'
const showDialog = ref(false)

</script>

<style scoped>

</style>