<template>
  <Dialog :isDialogOpen="showDialog" @close="showDialog = false" title="Add domain forwarder" ok-text="Apply now" cancel-text="cancel"
  @cancelClicked="showDialog = false">
    <section>
      <WarningBox :state="warningState"/>
      <section class="mt-4 flex border p-3 border-Gray-b7 rounded-lg items-center gap-2">
        <i class="isax isax-info-circle"/>
        <h2 class="text-base text-Gray-b3 font-medium">Incorrect nameservers</h2>
        <el-button class="ml-auto btn btn-primary">Fix</el-button>
      </section>
      <section class="mt-4">
        <h2 class="text-base text-Gray-b3 font-bold">Select a forwarder type</h2>
        <section class="mt-4">
          <el-radio-group v-model="activeForward" class="grid grid-cols-1 border border-Gray-b7">
          <section v-for="type in forwardTypes">
            <el-radio :value="type.id" :label="type.id"  class="py-4 px-3 h-auto bg-opacity-10 w-full border-b border-Gray-b7" :class="[type.id == activeForward ? 'bg-Primary' : '']">
              <template #default>
                <section class="max-w-[360px]">
                  <h2 class="text-base font-bold">{{ type.title }}</h2>
                  <p class="mt-2 w-full text-sm text-Gray-b4 h-auto" style="text-wrap: wrap">{{ type.text }}</p>
                </section>
              </template>
            </el-radio>
          </section>
          </el-radio-group>
        </section>
      </section>
      <section class="mt-4">
        <h2 class="text-base text-Gray-b3 font-bold">Forward to</h2>
        <el-input placeholder="example.com" v-model="website" />
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
const warningState = {
  header: '',
  options: [
    { label: "Your domain isn't configured to use this feature correctly. If you're sure you wish to enable this functionality, please review the issues below."}
  ]
}
const activeForward = ref(1)
const forwardTypes = ref([
  { id: 1, title: 'Visible', text: 'The new address will be displayed in the adddress bar' },
  { id: 2, title: 'Invisible', text: 'The orginal domain will be displayed in adress bar, hidding the actual destination' },
  { id: 3, title: 'Rewrite', text: "Advanced user: use Apache's mod_rewriter engine to perform advanced domain edirects"},
])
const website = ref('')
</script>

<style scoped>

</style>