<template>
  <section class="profile-card">
    <section class="breadcrumb">
      <template v-if="props.breadCrumbItems">
        <template v-for="(item, index) in props.breadCrumbItems">
          <span class="item">{{ item }}</span>
          <template v-if="index + 1 < props.breadCrumbItems.length">
            <i class="md:mx-2 isax isax-arrow-right-3" />
          </template>
        </template>
      </template>
      <template v-else>
        <template v-for="(item, index) in breadCrumbItems">
          <span class="item">{{ item }}</span>
          <template v-if="index + 1 < breadCrumbItems.length">
            <i class="md:mx-2 isax isax-arrow-right-3" />
          </template>
        </template>
      </template>
    </section>
    <el-divider />
    <section class="body">
      <slot />
    </section>
  </section>
</template>

<script setup>
import { useSidemenuStore } from "@/store/sideMenu";

const route = useRoute();
const sideMenuStore = useSidemenuStore();
const props = defineProps({
  breadCrumbItems: {
    default: "",
  },
});

const menuItems = computed(() => sideMenuStore.menuItems);
const breadCrumbItems = computed(() => {
  let items = [];
  let splitRoute = route.fullPath.split("/");
  if (splitRoute.length > 1) {
    let father = menuItems.value.find(
      (item) => item.route == `/${splitRoute[1]}`
    );
    items.push(father.title);
    if (father.children.length > 0 && splitRoute.length >= 2) {
      console.log(father.children);
      let child = father.children.find(
        (child) => child.route == route.fullPath
      );
      if (child) items.push(child.title);
    } else if (father.title == "Extensions" && splitRoute[2] == "add") {
      items.push("Add Extension");
    }
  }
  return items;
});
</script>

<style scoped>
</style>