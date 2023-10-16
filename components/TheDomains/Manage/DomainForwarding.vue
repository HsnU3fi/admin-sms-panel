<template>

  <Dashboard>
    <template #header="{titleClass}">
      <section class="flex justify-between items-center">
      <h1 :class="titleClass" class="flex items-center gap-1">
        <i class="isax isax-global"/>
        Domain Forwarding
      </h1>
      <el-button class="btn text-Primary" text @click="showDialog = true">
        Add
      </el-button>
      </section>
    </template>
    <section class="flex items-center justify-between">
      <p class="text-sm text-Gray-b4 font-medium">Easily redirect your domain's visitors to another website</p>
    </section>
    <AddDomain v-model="showDialog" />
  </Dashboard>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import AddDomain from './AddDomainForwarding'
const showDialog = ref(false)
</script>

<style scoped>

</style>