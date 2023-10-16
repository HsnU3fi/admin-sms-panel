<template>
  <section class="sample-form">
    <section class="form-item">
<el-input class="with-prepend holder-black search-input" v-model="search" placeholder="Search">
  <template v-slot:prepend>
    <i class="isax isax-search-normal font-bold md:text-lg"/>
  </template>
</el-input>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    default: ''
  }
})
const emits = defineEmits()
const search = computed({
  set(value) {
    emits('update:modelValue', value)
  },
  get() {
    return props.modelValue
  }
})
</script>

<style scoped>

</style>