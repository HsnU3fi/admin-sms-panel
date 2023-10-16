<template>
  <section>
    <section class="h-screen w-screen flex items-center justify-center">
    <el-skeleton animated :loading="true" :rows="5" style="height: 500px; width: 60%">
    </el-skeleton>
    </section>
  </section>
</template>

<script setup>
const router = useRouter()
router.push({ path: '/login' })
</script>

<style scoped>

</style>