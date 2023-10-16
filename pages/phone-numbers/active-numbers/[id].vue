<template>
  <section class="sample-form">
    <Dashboard title="">
      <template #header="{ titleClass }">
        <section class="flex items-center justify-between gap-5 mb-2">
          <h1
            class="flex justify-between items-center w-full"
            :class="titleClass"
          >
            Review Phone Number
            <i @click="router.go(-1)" class="isax isax-close-circle text-3xl cursor-pointer" />
          </h1>
        </section>
      </template>
      <h1 class="font-bold text-xl flex justify-between">
        {{ route.params.id }} <span>$10 monthly fee</span>
      </h1>
      <p class="mt-2 flex gap-2 items-center pb-4 border-b-2">
        <i class="isax isax-info-circle text-Primary-b1 text-xl" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero,
        repellat reprehenderit consequuntur quibusdam quod corrupti nulla optio
        iusto expedita
      </p>
      <h1 class="font-medium mt-4 text-lg flex justify-between">
        Capabilities
      </h1>
      <div
        v-for="(item, index) in options"
        :key="index"
        class="flex gap-4 items-center my-10"
      >
        <i :class="item.icon" class="text-4xl" />
        <div>
          <h3 class="text-lg font-bold">{{ item.title }}</h3>
          <h6 class="font-normal text-sm">{{ item.description }}</h6>
        </div>
      </div>
    </Dashboard>
  </section>
</template>

<script setup>
import Dashboard from "@/components/Base/Card/Dashboard";
import { ref } from "vue";
definePageMeta({
  layout: "dashboard",
});
const router = useRouter();
const route = useRoute();

const options = [
  {
    icon: "isax isax-message",
    title: "SMS",
    description: "Send and recieve text messages",
  },
  {
    icon: "isax isax-mobile",
    title: "VOICE",
    description: "Recieve incomming callls",
  },
  {
    icon: "isax isax-printer",
    title: "FAX",
    description: "Send and recieve text faxes",
  },
  {
    icon: "isax isax-presention-chart",
    title: "MMS",
    description: "Send and recieve multi-media messages",
  },
];
</script>

<style scoped></style>
