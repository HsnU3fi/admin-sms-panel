<template>
  <section class="pricing">
    <Dashboard>
      <template #header="{titleClass}">
        <h1 :class="titleClass" class="text-center">Ready To Get Started?</h1>
        <p class="mt-2 text-sm text-Gray-b4 text-center">Choose a plan tailored to your needs</p>
      </template>
      <section>
        <section class="flex justify-center">
          <el-switch v-model="activeSwitch" size="large" inactive-text="Monthly" active-text="Yearly"/>
        </section>
        <section class="mt-10 md:mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 plans">
          <section class="rounded-lg plan" v-for="plan in plans" :class="[plan.title == 'Ultimate' ? 'bg-Primary-b1 best-plan' : 'bg-white normal-plan']">
            <h1 class="title">
              <i class="isax" :class="`isax-${plan.icon}`" />
              {{ plan.title }}
            </h1>
            <p class="description">{{ plan.description }}</p>
            <section class="flex items-center gap-2 price">
              <h2 class="value">${{ plan.price }}</h2>
              <span class="text-xs font-light">per month</span>
            </section>
            <el-button class="order-btn">
              Get Started
            </el-button>
            <section class="features">
              <h2 class="title">{{ plan.title }} include: </h2>
              <section class="grid grid-cols-1 gap-5">
                <section v-for="item in plan.options" class="flex items-center gap-2 feature-item">
                  <i class="isax isax-tick-circle4 text-Primary-w2"/>
                  <p class="">{{ item }}</p>
                </section>
              </section>
            </section>
            <section class="footer">
              <nuxt-link to="/ssl">See all features</nuxt-link>
            </section>
          </section>

        </section>
      </section>
    </Dashboard>
  </section>
</template>

<script setup>
import Dashboard from "@/components/Base/Card/Dashboard";

definePageMeta({
  layout: 'dashboard'
})
const activeSwitch = ref(false)
const plans = ref([
  {title: 'Lite', icon: 'money-recive', price: 11, description: 'Perfect to get started', options: ['Lorem1', 'Lorem2', 'Lorem3']},
  {title: 'Pro',icon: 'star', price: 20, description: 'Best for register', options: ['10 lorem', '50 template', 'Lorem3', 'Lorem4']},
  {title: 'Ultimate', icon: 'flash', price: 35, description: 'Most powerful plan', options: ['10 lorem', '50 template', 'Lorem3', 'Lorem4']},
])
</script>

<style scoped>

</style>