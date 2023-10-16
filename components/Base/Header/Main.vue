<template>
  <header class="main-header animate__animated animate__slideInLeft">
    <section class="left-side">
      <el-button class="open-menu" @click="openMenu">
        <i class="isax isax-menu-1" />
      </el-button>
      <h1 class="title">VOIP Dashboard</h1>
      <el-divider direction="vertical"/>
      <section class="date">
        <i class="isax isax-calendar-1"/>
        <span>{{ new Date().toDateString() }}</span>
      </section>
    </section>
    <section class="right-side">
      <section class="left-items">
        <el-button text>
          <i class="isax isax-global"/>
        </el-button>
        <el-button text>
          <i class="isax isax-sms"/>
        </el-button>
        <el-button text>
          <i class="isax isax-cloud-add"/>
        </el-button>
        <el-button text @click="pushToPage('notification')">
          <i class="isax isax-notification"/>
        </el-button>
      </section>
      <el-divider direction="vertical"/>
      <section class="right-items">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img src="/assets/images/profile/profile.png" class="profile-photo"/>
            <el-icon class="el-icon--right">
              <i class="isax isax-arrow-down-14"/>
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <button class="flex items-center gap-2" @click="showCompanyDialog = true">
                  <i class="isax isax-buildings4"/>
                  <span class="text-sm text-Gray-b3">Company Information</span>
                </button>
              </el-dropdown-item>

              <el-dropdown-item>
                <button class="flex items-center gap-2" @click="showAdminstratorDialog = true">
                  <i class="isax isax-user"/>
                  <span class="text-sm text-Gray-b3">Administrator Settings</span>
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button class="flex items-center gap-2" @click="showPasswordDialog = true">
                  <i class="isax isax-lock"/>
                  <span class="text-sm text-Gray-b3">Change Password</span>
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <section class="flex items-center gap-2">
                  <i class="isax isax-logout"/>
                  <span class="text-sm text-Gray-b3">Log Out</span>
                </section>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </section>
    </section>
  </header>
</template>

<script setup>
import { useSidemenuStore } from "@/store/sideMenu";
const router = useRouter()
const sideMenuStore = useSidemenuStore();
// methods
const pushToPage = (route) =>{
  router.push({ path: route })
}
const openMenu = () => {
  sideMenuStore.toggleShowMenu(true)
}
</script>

<style scoped>

</style>