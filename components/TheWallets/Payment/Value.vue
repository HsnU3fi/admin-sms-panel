<template>
  <section>
    <p class="text xs md:text-sm text-Gray-b6">01</p>
    <h1 class="text-lg md:text-xl text-Gray-b2 font-bold">Increase Rate</h1>
    <el-divider class="mt-2 mb-4" />
    <section class="sample-form">
      <section class="form-item">
        <label>Increase value</label>
        <el-input type="number" v-model="value" />
      </section>
    </section>
  </section>
</template>

<script setup>
const value = ref(0)
</script>

<style scoped>

</style>