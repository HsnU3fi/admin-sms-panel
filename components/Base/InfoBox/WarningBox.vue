<template>
  <section
    class="info-box bg-Secondary-w4 p-[16px] border-2 border-Secondary-w2 rounded-lg"
  >
    <h6 class="text-Secondary-b2 text-md my-2 font-medium">{{ state.header }}</h6>
    <ul class="list-inside list-disc">
      <li
        class="text-Secondary-b2 text-md font-medium"
        v-for="(option, index) in state.options"
        :key="index"
      >
        {{ option.label }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  state: {
    type: Object,
    default: {
      header: "",
      options: [],
    },
  },
});
const { state } = props;
</script>
