<template>
  <section class="flex items-center gap-5">
    <nuxt-link :to="item.route" v-for="item in items" class="px-3 py-1 rounded-lg bg-Gray-b8 text-xs md:text-sm">
      <i class="isax" :class="`isax-${item.icon}`"/>
      {{ item.title }}
    </nuxt-link>
  </section>
</template>

<script setup>
const items = ref([
  {
    title: 'Pricing',
    route: '/pricing',
    icon: 'note-2'
  },
  {
    title: 'Affiliates',
    route: '/affiliates',
    icon: 'data'
  },
  {
    title: 'Support',
    route: '/support',
    icon: 'call-calling'
  }
])
</script>

<style scoped>

</style>