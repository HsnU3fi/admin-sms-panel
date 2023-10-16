<template>
  <section class="default-layout flex min-h-screen">
    <SideMenu/>
    <section class="grow w-1 animate__animated animate__slideInLeft">
      <Main class="border-b border-Gray-b7" />
      <section class="px-5 py-3 bg-white sticky top-0 shadow-lg z-10">
        <TopMenu />
      </section>
      <section class="p-4">
      <slot/>
      </section>
    </section>
  </section>
</template>

<script setup>
import SideMenu from '@/components/Base/Menu/SideMenu'
import Main from "@/components/Base/Header/Main";
import TopMenu from "@/components/Base/Menu/TopMenu";


</script>

<style scoped>

</style>