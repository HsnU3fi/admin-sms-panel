<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="Credit card" name="credit">
      <Credit />
    </el-tab-pane>
    <el-tab-pane label="Paypal" name="paypal">
      <Paypal />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import Credit from './Credit'
import Paypal from "./Paypal";
const props = defineProps({
  modelValue: {
    default: ''
  }
})
const emits = defineEmits()

const activeTab = computed({
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