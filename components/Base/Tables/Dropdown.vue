<template>
  <el-table-column width="40">
    <template #default="scope">
      <el-dropdown placement="left">
        <button class="dropdown">
          <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="18" cy="11.946" rx="2" ry="1.94595" fill="#333333"/>
            <ellipse cx="18" cy="18.0006" rx="2" ry="1.94595" fill="#333333"/>
            <ellipse cx="18" cy="24.0534" rx="2" ry="1.94595" fill="#333333"/>
          </svg>
        </button>
        <template #dropdown>
          <slot name="items" class="table-dropdown" :scope="scope"></slot>
        </template>
      </el-dropdown>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "Dropdown"
}
</script>

<style scoped>

</style>