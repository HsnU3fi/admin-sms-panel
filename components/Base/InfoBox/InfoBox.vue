<template>
  <section
    class="info-box bg-Primary-w5 p-[16px] border-2 border-Primary rounded-lg"
  >
    <h6 class="text-Primary-b2 text-md my-2 font-bold">{{ state.header }}</h6>
    <ul class="list-inside list-disc">
      <li
        class="text-Primary-b2 text-md font-medium"
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
