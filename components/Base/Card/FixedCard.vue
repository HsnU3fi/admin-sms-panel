<template>
  <template v-if="props.modelValue">
    <section class="fixed-card">
      <section class="header">
        <h1 class="text-xl text-Gray-b2 font-bold">{{ props.title }}</h1>
        <el-button text @click="closeCard"
          ><i class="isax isax-close-circle text-Gray-b6 text-lg"
        /></el-button>
      </section>
      <el-divider />
      <section class="body">
        <slot name="body"></slot>
      </section>
      <section class="footer">
        <slot name="footer"></slot>
      </section>
    </section>
  </template>
</template>

<script setup>
const props = defineProps({
  title: {
    default: "",
  },
  modelValue: {
    default: false,
  },
});
const emits = defineEmits();
const closeCard = () => {
  emits("update:modelValue", false);
};
</script>

<style scoped>
</style>