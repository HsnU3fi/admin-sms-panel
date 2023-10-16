<template>
  <section>
    <el-radio-group v-model="activeStep" class="justify-center w-full">
      <el-radio-button :label="step" v-for="step in steps">{{ step }}</el-radio-button>
    </el-radio-group>
  </section>
</template>

<script setup>
const steps = ref(['Domain', 'Configure', 'Checkout'])
const props = defineProps({
  activeStep: ''
})
const emits = defineEmits()
const router = useRouter()
const activeStep = computed({
  set(value) {
    switch (value) {
      case "Domain" : {
        router.push({ path: '/domains/new'})
        break
      }
      case "Configure" : {
        router.push({ path: '/domains/new/configure'})
        break
      }
      case "Checkout" : {
        router.push({ path: '/domains/new/checkout'})
        break
      }
    }
  },
  get() {
    return props.activeStep
  }
})
</script>

<style scoped>

</style>