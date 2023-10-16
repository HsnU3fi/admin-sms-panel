<template>

  <Dashboard>
    <template #header="{titleClass}">
      <h1 :class="titleClass" class="flex items-center gap-1">
        <i class="isax isax-info-circle"/>
        Domain settings
      </h1>
    </template>
    <section class="flex items-center justify-between">
      <el-switch v-model="settings.auto" active-text="Auto Renew" />
      <p class="text-sm text-Gray-b4 font-medium">renew on 2023-07-08</p>
    </section>
    <el-divider class="my-2"/>
    <section>
      <el-switch v-model="settings.hide" active-text="Hide contact info from WHOIS" />
    </section>
    <el-divider class="my-2"/>
    <section>
      <el-switch v-model="settings.registrar" active-text="Registrar lick" />
    </section>
  </Dashboard>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
const settings = reactive({
  auto: true,
  hide: true,
  registrar: true
})
</script>

<style scoped>

</style>