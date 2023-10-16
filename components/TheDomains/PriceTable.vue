<template>
  <section>
    <client-only>
      <section class="animate__animated animate__fadeInUp">
        <Table
            ref="multipleTableRef"
            class="mt-4"
            :data="tableData"
        >
          <template v-slot:items>
            <el-table-column property='DOMAIN' label='DOMAIN' />
            <el-table-column property='1 YEAR' label='1 YEAR' />
            <el-table-column property='2 YEARS' label='2 YEARS' />
            <el-table-column property='10 YEARS' label='10 YEARS' />
            <el-table-column property='RENEW' label='RENEW' />
            <el-table-column property='TRANSFER' label='TRANSFER' />
            <el-table-column property='WHOIS PRIVACY' label='WHOIS PRIVACY' />
            <el-table-column property='CPANEL ACCESS' label='CPANEL ACCESS' />
            <el-table-column property='ORDER' label='ORDER' >
              <template #default="scope">
                <el-button class="btn btn-primary">Buy now</el-button>
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

const tableData = ref([
  {
    'DOMAIN': '.com',
    '1 YEAR': '$9.965',
    '2 YEARS': '$14.74',
    '10 YEARS': '$120',
    'RENEW': '$8.95',
    'TRANSFER': '$2',
    'WHOIS PRIVACY': '$3',
    'CPANEL ACCESS': '$2',
    'ORDER': "1",
  },
  {
    'DOMAIN': '.net',
    '1 YEAR': '$9.965',
    '2 YEARS': '$14.74',
    '10 YEARS': '$120',
    'RENEW': '$8.95',
    'TRANSFER': '$2',
    'WHOIS PRIVACY': '$3',
    'CPANEL ACCESS': '$2',
    'ORDER': "1",
  },
  {
    'DOMAIN': '.org',
    '1 YEAR': '$9.965',
    '2 YEARS': '$14.74',
    '10 YEARS': '$120',
    'RENEW': '$8.95',
    'TRANSFER': '$2',
    'WHOIS PRIVACY': '$3',
    'CPANEL ACCESS': '$2',
    'ORDER': "1",
  },
  {
    'DOMAIN': '.biz',
    '1 YEAR': '$9.965',
    '2 YEARS': '$14.74',
    '10 YEARS': '$120',
    'RENEW': '$8.95',
    'TRANSFER': '$2',
    'WHOIS PRIVACY': '$3',
    'CPANEL ACCESS': '$2',
    'ORDER': "1",
  },
  {
    'DOMAIN': '.edu',
    '1 YEAR': '$9.965',
    '2 YEARS': '$14.74',
    '10 YEARS': '$120',
    'RENEW': '$8.95',
    'TRANSFER': '$2',
    'WHOIS PRIVACY': '$3',
    'CPANEL ACCESS': '$2',
    'ORDER': "1",
  },
  {
    'DOMAIN': '.us',
    '1 YEAR': '$9.965',
    '2 YEARS': '$14.74',
    '10 YEARS': '$120',
    'RENEW': '$8.95',
    'TRANSFER': '$2',
    'WHOIS PRIVACY': '$3',
    'CPANEL ACCESS': '$2',
    'ORDER': "1",
  },
]);
</script>

<style scoped>

</style>