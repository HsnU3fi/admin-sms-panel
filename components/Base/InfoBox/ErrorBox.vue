<template>
  <section
    class="info-box bg-Error-b1 bg-opacity-30 p-[16px] border-2 border-Error-b1 rounded-lg"
  >
    <h6 class="text-Error-b4 text-md my-2 font-medium">{{ state.header }}</h6>
    <ul class="list-inside list-disc">
      <li
        class="text-Error-b2 text-md font-medium"
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
