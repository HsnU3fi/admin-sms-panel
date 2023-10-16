<template>

  <section class="bg-white p-5 rounded-lg mt-4">
    <h1 :class="titleClass">{{ props.title }}</h1>
    <slot name="header" :titleClass="titleClass"/>
    <el-divider/>
    <slot></slot>
  </section>
</template>

<script setup>
const props = defineProps({
  title: ''
})
const titleClass = ref('text-base lg:text-lg text-Gray-b2 font-bold')
</script>

<style scoped>

</style>