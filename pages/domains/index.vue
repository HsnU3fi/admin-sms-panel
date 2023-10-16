<template>
  <section class="new-domain">
    <Dashboard class="mt-6">
      <template #header="{titleClass}">
        <section class="block md:flex justify-between items-center">
          <h2 :class="titleClass">Domains</h2>
          <section class="flex gap-3 items-center grow-0">
          <el-button class="btn btn-primary" @click="router.push({ path: 'domains/new'})">
            <i class="isax isax-add" />
            Register Domain
          </el-button>
          <el-button class="btn borde border-Primary text-Primary">
            <i class="isax isax-convert-3d-cube" />
            Transfer domain
          </el-button>
          </section>
        </section>
      </template>
      <DomainsTable class="mt-6" />
    </Dashboard>
  </section>
</template>

<script setup>
import DomainsTable from '@/components/TheDomains/DomainsTable'
import Dashboard from "@/components/Base/Card/Dashboard";
definePageMeta({
  layout: 'dashboard'
})
const router = useRouter()
</script>

<style scoped>

</style>