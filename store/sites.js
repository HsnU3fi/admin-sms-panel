import { defineStore } from "pinia";
import { ref } from "vue";
export const useSitesStore = defineStore("sitesStore", () => {
  const sites = reactive({
    websiteBuilder: 'http://72.142.143.6:5000'
  })
  return {sites}
});
