<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="Payment Methods" name="Methods">
      <PaymentMethods />
    </el-tab-pane>
    <el-tab-pane label="Auto recharge" name="recharge">
      <AutoRecharge />
    </el-tab-pane>
    <el-tab-pane label="Balance notifications" name="notifications">
      <BalanceNotification />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import PaymentMethods from './PaymentMethods'
import AutoRecharge from './AutoRecharge'
import BalanceNotification from "./BalanceNotification";
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