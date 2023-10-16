<template>
  <section>
    <p class="text xs md:text-sm text-Gray-b6">03</p>
    <h1 class="text-lg md:text-xl text-Gray-b2 font-bold">Application</h1>
    <el-divider class="mt-2 mb-4" />
    <section class="sample-form">
      <section class="form-item">
        <label>Application</label>
        <el-select v-model="value">
          <el-option v-for="item in apps" :value="item" :label="item" :key="item" />
        </el-select>
      </section>
    </section>
  </section>
</template>

<script setup>
const value = ref('Wallet amount')
const apps = ['Wallet amount', 'Builder', 'Sms panel', 'Voip']
</script>

<style scoped>

</style>