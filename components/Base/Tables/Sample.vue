<template>
  <el-table :data="tableData" class="sample-table">
    <slot name="items"></slot>
  </el-table>
</template>

<script setup>
const props = defineProps({
  tableData: {
    default: "",
  },
});
</script>

<style scoped>
</style>