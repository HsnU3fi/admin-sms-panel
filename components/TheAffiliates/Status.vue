<template>
  <section>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <section class="px-4 py-3 rounded-lg bg-white flex items-start gap-3" v-for="item in status" :class="item.color">
        <i class="isax text-3xl" :class="`isax-${item.icon} ${item.color}`" />
        <section>
          <h1 class="font-bold text-lg text-center">{{ item.value }}</h1>
          <h1 class="font-bold text-base text-center">{{ item.title }}</h1>
        </section>
      </section>
    </section>
    <section class="mt-6 md:flex gap-5 items-center justify-center p-4 rounded-lg bg-white text-center">
      <section>
        <h2 class="text-sm md:text-base text-Gray-b3">Your Unique Referral Link</h2>
        <p class="mt-2 text-base lg:text-lg">{{ link }}</p>
      </section>
      <section class="md:mx-14">
      <el-divider class="md:hidden"/>
      <el-divider class="hidden md:block h-16 mx-auto"  direction="vertical"/>
      </section>
      <section>
        <h2 class="text-sm md:text-base text-Gray-b3">Share your link with friends</h2>
        <section class="flex items-center mt-2 gap-4 justify-center md:justify-start">
          <template v-for="(item, index) in shareLinks">
            <a  class="mt-2 text-base lg:text-lg" :href="item">
              <img :src="`/assets/images/logo/${index}-color.svg`" class="w-6" />
            </a>
          </template>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
const status = [
  {title: 'Clicks', value: '0', icon: 'people', color: 'text-Secondary-b2'},
  {title: 'Signups', value: '0', icon: 'shopping-cart', color: 'text-Primary'},
  {title: 'Conversions', value: '0', icon: 'chart-21', color: 'text-Success-b4'},
]
const link = ref('https://panel.softhost.ca/aff.php?aff=2')
const shareLinks = reactive({
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${link.value}`,
  twitter: `https://twitter.com/home?status=${link.value}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${link.value}&title=Web%20Hosting%20Canada`
})
</script>

<style scoped>

</style>