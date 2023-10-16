<template>
  <clinet-only>
    <swiper
        :space-between="50"
        :slides-per-view="swiperOptions.slidesPerView"
        pagination
        :auto-play="swiperOptions.autoplay"
        :pagination="swiperOptions.pagination"
        :mudoles="[SwiperAutoplay,SwiperPagination]"
    >
      <swiper-slide v-for="index in 2">
        <img :src="`/assets/images/slides/slide${index}.jpg`" class="h-46 md:h-72 lg:h-96 w-full rounded object-cover">
      </swiper-slide>
    </swiper>
  </clinet-only>
</template>

<script setup>
const swiperOptions = {
  autoplay: {
    delay: 800,
    disableOnInteraction: true,
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
}
</script>

<style scoped>

</style>