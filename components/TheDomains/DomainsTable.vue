<template>
  <section>
    <section class="block md:flex gap-3 sample-form">
      <section class="form-item w-full">
      <el-input v-model="search" class="with-prepend h-full">
        <template #prepend>
          <i class="isax isax-search-normal" />
        </template>
      </el-input>
      </section>
      <section class="flex items-center mt-4 md:mt-0 md:grow-0">
      <el-button class="btn border-Gray-b6 text-Gray-b2">
        <i class="isax isax-filter"/>
        Filters
      </el-button>
      <el-button class="btn border-Gray-b6 text-Gray-b2">
        <i class="isax isax-grid-3"/>
        Columns
      </el-button>
      </section>
    </section>
    <section class="flex flex-wrap gap-3 items-center mt-4 md:mt-4">
      <span class="flex grow-0 gap-1 items-center px-4 py-1 rounded-lg bg-Gray-b8 text-Gray-b2 font-bold text-sm" v-for="item in activeFilters">
        <i class="isax isax-close-circle"/>{{ item }}
      </span>
    </section>
    <client-only>
      <section class="animate__animated animate__fadeInUp mt-6">
        <Table
            ref="multipleTableRef"
            class="mt-4"
            :data="tableData"
        >
          <template v-slot:items>
            <el-table-column property='DOMAIN' label='DOMAIN' />
            <el-table-column property='Status' label='Status' >
              <template #default="scope">
                <span :class="[scope.row.Status == 'Active' ?  'bg-Success-b3 text-Success-b3' : 'bg-Error-b3 text-Error-b3']"
                      class="block w-fit mx-auto rounded-lg px-4 bg-opacity-10 py-2">
                  {{ scope.row.Status }}
                </span>
              </template>
            </el-table-column>
            <el-table-column property='Auto' label='Auto renew' >
              <template #default="scope">
                <el-switch v-model="scope.row.Auto" />
              </template>
            </el-table-column>
            <el-table-column property='Privacy' label='Privacy' />
            <el-table-column property='Expiration' label='Expiration' />
            <el-table-column property='' label='' width="240">
              <template #default>
                <section class="flex items-center gap-1">
                  <el-button class="btn w-9 h-9 rounded-full flex items-center justify-center grow-0">
                    <i class="isax isax-global mr-0" />
                  </el-button>
                  <el-button class="btn w-9 h-9 rounded-full flex items-center justify-center grow-0">
                    <i class="isax isax-card mr-0" />
                  </el-button>
                  <el-button class="btn w-9 h-9 rounded-full flex items-center justify-center grow-0">
                    <i class="isax isax-refresh mr-0" />
                  </el-button>
                  <el-button class="btn text-xs" @click="router.push({ path: '/domains/manage/12' })">
                    Manage
                  </el-button>
                </section>
              </template>
            </el-table-column>
          </template>
        </Table>
      </section>
    </client-only>
  </section>
</template>

<script setup>
import Table from "@/components/Base/Tables/Sample";
import Dropdown from "@/components/Base/Tables/Dropdown";
const router = useRouter()
const search = ref('')
const activeFilters = ref(['Active', 'Grace period'])
const tableData = ref([
  {
    'DOMAIN': '.com',
    'Status': 'Active',
    'Auto': true,
    'Privacy': 'N/A',
    'Expiration': '2023-07-18',
  },
  {
    'DOMAIN': '.net',
    'Status': 'Active',
    'Auto': false,
    'Privacy': 'N/A',
    'Expiration': '2023-07-18',
  },
  {
    'DOMAIN': '.org',
    'Status': 'Deactive',
    'Auto': true,
    'Privacy': 'N/A',
    'Expiration': '2023-07-18',
  },
  {
    'DOMAIN': '.biz',
    'Status': 'Deactive',
    'Auto': false,
    'Privacy': 'N/A',
    'Expiration': '2023-07-18',
  },
  {
    'DOMAIN': '.edu',
    'Status': 'Active',
    'Auto': true,
    'Privacy': 'N/A',
    'Expiration': '2023-07-18',
  },
]);
</script>

<style scoped>

</style>