<template>
  <ClientOnly>
    <el-dialog
      :model-value="state.isDialogOpen"
      :show-close="false"
      class="base-confirm-dialog"
      @close="closeDialog"
      align-center
    >
      <template #header>
        <h3 class="header flex justify-between">
          {{ state.title }}
          <span @click="cancelHandler"
            ><i class="isax isax-close-circle text-Gray-b6 text-lg"
          /></span>
        </h3>
      </template>
      <div class="content">
        {{ state.content }}
      </div>
      <div class="flex gap-4 justify-center mt-5 g-20">
        <button
          type="button"
          :class="state.type"
          class="danger-outline w-1/2"
          @click="cancelHandler"
        >
          {{ state.cancelText }}
        </button>
        <button
          type="button"
          class="w-1/2 danger"
          :class="state.type"
          @click="confirmHandler"
        >
          {{ state.confirmText }}
        </button>
      </div>
    </el-dialog></ClientOnly
  >
</template>

<script setup>
import { ref } from "vue";

//props

const props = defineProps({
  state: {
    default: null,
    type: Object,
  },
});
const state = ref(props.state);

//emits

const emit = defineEmits("confirm", "cancel");

//methods

const confirmHandler = () => {
  emit("confirm");
};
const cancelHandler = () => {
  emit("cancel");
};
</script>

<style>
</style>