<template>
  <section class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 min-h-screen">
    <section class="lg:col-span-2 relative flex items-center">
      <img src="/assets/images/login/background.png" class="absolute left-0 top-0 h-full w-full">
      <section class="relative p-5">
        <img src="/assets/images/logo.png" class="w-12 lg:w-16 animate" />
        <h1 class="mt-6 font-light text-lg lg:text-xl text-black">
          WELLCOME TO <b class="font-bold text-Primary">WEBORET</b>
        </h1>
        <p class="mt-4 text-base lg:text-lg text-[#3D64C8] font-light">
          <span class="relative">
          WEBSITE
            <svg class="w-full absolute left-0 top-full mt-2" height="4" viewBox="0 0 142 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="142" height="4" fill="#FFA311"/>
            </svg>
          </span>
          BUILDER
        </p>
      </section>
    </section>
    <section class="md:col-span-2 lg:col-span-3 flex items-center justify-center">
      <section class="max-w-[600px] min-w-[500px]">
      <slot />
      </section>
    </section>
  </section>
</template>

<script>
</script>

<style scoped>

</style>