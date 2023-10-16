<template>
  <Dialog :isDialogOpen="showDialog" @close="showDialog = false" title="Change Nameservers" ok-text="Apply changes"
          cancel-text="cancel"
          @cancelClicked="showDialog = false">
    <section>
      <h2 class="text-base text-Gray-b3 font-medium">You selected <b>Domain.com</b></h2>
      <section class="mt-4">
        <el-radio-group v-model="activeForward" class="grid grid-cols-1 border border-Gray-b7">
          <section v-for="type in forwardTypes">
            <el-radio :value="type.id" :label="type.id" class="py-4 px-3 h-auto bg-opacity-10 w-full border-b border-Gray-b7">
              <template #default>
                <section class="max-w-[360px]">
                  <h2 class="text-base font-bold">{{ type.title }}</h2>
                  <p class="mt-2 w-full text-sm text-Gray-b4 h-auto" style="text-wrap: wrap">{{ type.text }}</p>
                  <template v-if="activeForward == type.id && type.id == 1">
                    <el-divider class="my-3" />
                    <h2 class="font-medium text-base text-Gray-b3">Whitch service would you like to use with this domain?</h2>
                    <el-select v-model="activeService.service">
                      <el-option v-for="item in services" :label="item" :lvalue="item" />
                    </el-select>
                    <el-divider class="my-3" />
                    <h2 class="font-medium text-base text-Gray-b3">Nameservers will be:</h2>
                    <p class="mt-4 bg-Gray-b8 p-3 rounded-lg text-Gray-b3 text-xs">parking1.weboret.ca</p>
                    <p class="mt-4 bg-Gray-b8 p-3 rounded-lg text-Gray-b3 text-xs">parking2.weboret.ca</p>
                  </template>
                  <template v-else-if="activeForward == type.id && type.id == 2">
                    <section class="grid grid-cols-1 gap-3 mt-4">
                      <el-input v-model="activeService.nameServer1" placeholder="nameserver1" />
                      <el-input v-model="activeService.nameServer2" placeholder="nameserver2" />
                    </section>
                  </template>
                </section>
              </template>
            </el-radio>
          </section>
        </el-radio-group>
        <p class="mt-4 text-base font-medium text-Gray-b4">Nameserver changes can take up to 24 hours to progate across the entire Internet</p>
      </section>
    </section>
  </Dialog>
</template>

<script setup>
import Dialog from '@/components/Base/Dialog/Base'
import WarningBox from "@/components/Base/InfoBox/WarningBox";

const props = defineProps({
  modelValue: {
    default: false
  }
})
const emits = defineEmits()
const showDialog = computed({
  set(value) {
    emits('update:modelValue', value)
  },
  get() {
    return props.modelValue
  }
})
const activeForward = ref(1)
const forwardTypes = ref([
  {id: 1, title: 'Use my domain with weboret service (recommended)', text: 'Easily connect your domain an existing our service'},
  {id: 2, title: 'Use custom nameservers (advanced)', text: 'Manually enter your nameservers'},
])
const services = [
    'Domain/Email forwarding + DNS editor (free)'
]
const activeService = ref({
  service: 'Domain/Email forwarding + DNS editor (free)',
  nameServer1: '',
  nameServer2: '',
})
const website = ref('')
</script>

<style scoped>

</style>