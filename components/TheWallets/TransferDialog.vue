<template>
  <transition duration="500">
    <template v-if="showDialog">
      <section
        class="px-5 py-4 bg-Primary bg-opacity-10 rounded-lg animate__animated"
        :class="[showDialog ? 'animate__fadeIn' : 'animate__zoomOut']"
      >
        <section class="sample-form gap-8 flex w-full flex-wrap flex-col">
          <section class="form-item max-w-[394px]">
            <label>Transfer From</label>
            <el-select v-model="transfer.from">
              <el-option
                v-for="item in apps"
                :value="item"
                :label="item"
                :key="item"
              />
            </el-select>
          </section>
          <section class="form-item max-w-[394px]">
            <label>Transfer To</label>
            <el-select v-model="transfer.to">
              <el-option
                v-for="item in apps"
                :value="item"
                :label="item"
                :key="item"
              />
            </el-select>
          </section>
          <section class="form-item max-w-[394px]">
            <label>Amount</label>
            <el-input type="number" v-model="transfer.amount" />
          </section>
          <section class="w-full flex justify-start">
            <el-button
              class="btn bg-Error-b3 text-white w-32 md:w-48"
              @click="showDialog = false"
              >Cancel</el-button
            >
            <el-button
              class="btn btn-primary w-32 md:w-48"
              @click="transferDone"
              >Transfer</el-button
            >
          </section>
        </section>
      </section>
    </template>
  </transition>
</template>

<script setup>
import Dialog from "@/components/Base/Dialog/Base";

const props = defineProps({
  modelValue: "",
});
const emits = defineEmits();
const apps = ref(["Sms panel", "Builder", "Voip"]);
const transfer = reactive({
  from: "",
  to: "",
  amount: "",
});
const showDialog = computed({
  set(value) {
    emits("update:modelValue", value);
  },
  get() {
    return props.modelValue;
  },
});
const transferDone = () => {
  emits("transfer", {
    from: transfer.from,
    to: transfer.to,
    amount: transfer.amount,
  });
};
</script>

<style scoped></style>
