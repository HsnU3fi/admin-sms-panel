<template>
  <section>
    <section class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <Dashboard class="" :title="app" v-for="app in apps">
        <section class="px-3">
          <section class="px-5 py-2 rounded-lg text-base text-Gray-b2 font-normal bg-Primary bg-opacity-20 flex items-center gap-4">
            <p class="text-xs md:text-sm text-Gray-b2 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem id iure labore modi omnis qui voluptas? Accusantium, eveniet, libero! Asperiores assumenda atque deleniti dolores eligendi id nesciunt nulla velit.
            </p>
            <el-button @click="visitSite(app)" class="btn btn-primary bg-transparent border border-Primary rounded text-Primary">Visit</el-button>
          </section>
        </section>
      </Dashboard>
    </section>
  </section>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
import {useSitesStore} from "@/store/sites";
definePageMeta({
  layout: 'dashboard'
})
const apps = ref(['Sms Panel', 'Website Builder', 'Sms Agent', 'Business phone system', 'Logo Marker', 'Linkee'])
const sitesStore = useSitesStore()

// ---------- Methods ----------
const visitSite = (app) => {
  if (app == 'Website Builder') {
    const cookie = useCookie('webteam_access_token')
    window.open(`${sitesStore.sites.websiteBuilder}/auth/loginByToken?token=${cookie.value}`, "_blank")
  }
}
</script>

<style scoped>

</style>