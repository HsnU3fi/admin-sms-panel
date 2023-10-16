<template>
  <section class="card">
    <template v-if="props.hasHeader">
      <section class="header">
        <slot name="header_text"></slot>
      </section>
    </template>
  </section>
</template>

<script setup>
const props = defineProps({
  parentClass: {
    default: "",
  },
  hasHeader: {
    default: true,
  },
});
const classes = computed(() => {
  return props.parentClass ? props.parentClass : "card";
});
</script>

<style scoped>
</style>