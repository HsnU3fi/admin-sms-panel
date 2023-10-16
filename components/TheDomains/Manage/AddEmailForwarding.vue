<template>
  <Dialog :isDialogOpen="showDialog" @close="showDialog = false" title="Add email forwarder" ok-text="Add forwarder" cancel-text="cancel"
  @cancelClicked="showDialog = false">
    <section>
      <ErrorBox :state="warningState"/>
      <section class="mt-4 flex border p-3 border-Gray-b7 rounded-lg items-center gap-2">
        <i class="isax isax-info-circle"/>
        <h2 class="text-base text-Gray-b3 font-medium">Incorrect nameservers</h2>
        <el-button class="ml-auto btn btn-primary">Fix</el-button>
      </section>
      <section class="mt-4">
        <h2 class="text-base text-Gray-b3 font-bold">Forward from</h2>
        <el-input placeholder="example.com" v-model="forward.from" >
          <template #append>
            @domain.com
          </template>
        </el-input>
      </section>
      <section class="mt-4">
        <h2 class="text-base text-Gray-b3 font-bold">Forward to</h2>
        <el-input placeholder="example.com" v-model="forward.to" />
      </section>
    </section>
  </Dialog>
</template>

<script setup>
import Dialog from '@/components/Base/Dialog/Base'
import ErrorBox from "@/components/Base/InfoBox/ErrorBox";
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
const forward = ref({
  from: '',
  to: ''
})
</script>

<style scoped>

</style>