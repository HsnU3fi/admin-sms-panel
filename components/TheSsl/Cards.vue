<template>
  <section class="grid grid-cols-1 gap-6 md:grid-cols-3">
    <section class="border bg-white border-Gray-b7 rounded-lg">
      <section class="p-3 rounded-t-lg bg-Gray-b8">
        <h1 class="text-base lg:text-lg font-normal text-Gray-b2 text-center">Single Domain<br>SSL Certificate</h1>
      </section>
      <section class="p-3 border-t-2 border-Error-b3">
        <template v-for="(item, index) in ssl">
        <p class="text-xs lg:text-sm font-normal text-Gray-b3">{{ item }}</p>
        <el-divider v-if="index +1 < ssl.length" class="my-3 border border-Gray-b7" />
        </template>
      </section>
    </section>
    <section class="border bg-white border-Gray-b7 rounded-lg">
      <section class="p-3 rounded-t-lg bg-Gray-b8">
        <h1 class="text-base lg:text-lg font-normal text-Gray-b2 text-center">WildCard<br>SSL Certificate</h1>
      </section>
      <section class="p-3 border-t-2 border-Error-b3">
        <template v-for="(item, index) in ssl">
        <p class="text-xs lg:text-sm font-normal text-Gray-b3">{{ item }}</p>
        <el-divider v-if="index +1 < ssl.length" class="my-3 border border-Gray-b7" />
        </template>
      </section>
    </section>
    <section class="border bg-white border-Gray-b7 rounded-lg">
      <section class="p-3 rounded-t-lg bg-Gray-b8">
        <h1 class="text-base lg:text-lg font-normal text-Gray-b2 text-center">Multi-Domain<br>SSL Certificate</h1>
      </section>
      <section class="p-3 border-t-2 border-Error-b3">
        <template v-for="(item, index) in ssl">
        <p class="text-xs lg:text-sm font-normal text-Gray-b3">{{ item }}</p>
        <el-divider v-if="index +1 < ssl.length" class="my-3 border border-Gray-b7" />
        </template>
      </section>
    </section>
  </section>
</template>

<script setup>
const ssl = ref(['DV SSL Certificate', 'OV SSL Certificate', 'EV SSL Certificate'])
</script>

<style scoped>

</style>