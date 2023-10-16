<template>
  <section class="animate__animated animate__fadeIn">
    <section class="flex items-center justify-center gap-4">
      <h1 class="text-xl lg:text-2xl text-Gray-b2 font-bold">
        Total Balance : <sup class="mr-1">$</sup>25,685<sup class="ml-1 text-base">.168</sup>
      </h1>
      <el-button
        class="btn rounded-xl"
        @click="router.push({ path: '/wallets/payment' })"
      >
        <section class="flex items-center gap-3">
          <section
            class="flex items-center w-6 h-6 rounded-full justify-center grow-0 bg-Primary"
          >
            <i class="isax text-white m-0 isax-add" />
          </section>
          Add Fund
        </section>
      </el-button>
    </section>
    <section class="mt-10 grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
      <section
        v-for="app in apps"
        class="px-3 py-2 rounded-lg border border-Gray-b7"
      >
        <h2 class="mt-5 text-base text-center">{{ app.name }}</h2>
        <el-divider class="my-1"/>
        <h3 class="mt-2 text-lg text-center font-bold flex justify-between">
          Total Balance<span><sup class="mr-1">$</sup> {{ app.amount }}</span>
        </h3>
        <section
          class="mt-3 flex justify-center"
          v-if="app.amount > 0"
        ></section>
      </section>
    </section>
    <section class="flex items-center mt-6 justify-center">
      <el-button
        class="btn bg-Secondary-b2 text-white border-none w-32 md:w-48 py-3"
        @click="openTransferDialog"
        >Transfer Funds</el-button
      >
    </section>
    <TransferDialog
      v-model="transferDialog"
      @transfer="transferDone"
      class="mt-10"
    />
  </section>
</template>

<script setup>
import TransferDialog from "./TransferDialog";
const router = useRouter();
const apps = ref([
  {
    id: 1,
    amount: 50,
    name: "Sms panel",
    image: "/assets/images/logo/sms-panel.svg",
  },
  { id: 2, amount: 50, name: "Voip", image: "/assets/images/logo/cloud.svg" },
  {
    id: 4,
    amount: 50,
    name: "Builder",
    image: "/assets/images/logo/cloud.svg",
  },
]);
const transferDialog = ref(false);
const openTransferDialog = () => {
  transferDialog.value = true;
};
const transferDone = (e) => {
  transferDialog.value = false;
  let amount = e.amount ? e.amount : 0;
  let from = apps.value.find((app) => app.name == e.from);
  let to = apps.value.find((app) => app.name == e.to);
  if (from) {
    from.amount -= amount;
  }
  if (to) {
    to.amount += amount;
  }
};
</script>

<style scoped></style>
