<template>
  <section>
    <client-only>
    <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane :label="tab" :name="tab" v-for="tab in tabs" >
      </el-tab-pane>
    </el-tabs>
      <template v-if="activeTab == 'Earnings'">
        <Earnings />
      </template>
      <template v-else-if="activeTab == 'Referrals'">
        <Referrals />
      </template>
    </client-only>
  </section>
</template>

<script setup>
import Earnings from "./Earnings";
import Referrals from "./Referrals";
const tabs = ref([
    'Earnings', 'Referrals'
])
const activeTab = ref('Earnings')

// methods

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style scoped>

</style>