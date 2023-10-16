<template>
  <div class="tac base-sidebar row z-20" :class="isCollapsed ? 'open' : 'close'">
    <h5 class="mb-2 header flex justify-between">
      <img src="/assets/images/logo.png" alt=""/>
      <span @click="handleCollapse"
      ><i class="isax isax-arrow-left-24"/>
      </span>
    </h5>
    <div class="wrapper">
      <el-menu
          :default-active="`${activeRoute + 1}`"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect($event, false)"
          :default-openeds="
          menuItems[activeRoute]?.children.length > 0
            ? [`${activeRoute + 1}`]
            : []
        "
      >
        <div v-for="(menuItem, index) in menuItems" :key="index">
          <template v-if="menuItem.header">
            <el-divider class="logout-divider"/>
            <span class="text-Gray-b6 text-sm">{{ menuItem.header }}</span>
          </template>
          <template v-else>
            <el-sub-menu :index="index + 1 + ''" v-if="menuItem?.children.length" :class="[menuItem.isButton ? 'is-open' : '']">
              <template #title>
              <span @click="routeChange(menuItem)" :key="counter">
                <i class="isax" :class="`isax-${menuItem.icon}`"/>
                <span>{{ menuItem.title }}</span>
              </span>
              </template>
              <el-menu-item-group>
                <NuxtLink
                    :to="subMenuItem.route"
                    v-for="(subMenuItem, subMenuIndex) in menuItem?.children"
                    :key="subMenuIndex"
                >
                  <el-menu-item
                      :index="index + 1 + ' - ' + (subMenuIndex + 1)"
                      class="ferr"
                  ><span class="circle"></span>{{ subMenuItem.title }}
                  </el-menu-item>
                </NuxtLink>
              </el-menu-item-group>
            </el-sub-menu>
          </template>
          <el-menu-item
              :index="index + 1 + ''"
              v-if="!menuItem.children.length && menuItem.title"
              class="far"
              :class="[menuItem.isButton ? 'is-open' : '']"
          >
            <i class="isax" :class="`isax-${menuItem.icon}`"/>
            <span>{{ menuItem.title }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
    <el-divider class="logout-divider"/>
    <el-menu>
      <el-menu-item>
        <i class="isax isax-logout"/>
        <span>Log Out</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useSidemenuStore} from "@/store/sideMenu";
// store
const sideMenuStore = useSidemenuStore();
const menuItems = computed(() => sideMenuStore.menuItems);
//state

const isCollapsed = computed({
  set(value) {
    sideMenuStore.toggleShowMenu(value)
  },
  get() {
    return sideMenuStore.isMenuClose
  }
});
const counter = ref(0);
const router = useRouter();
const activeRoute = computed(() => sideMenuStore.activeTab);
const openedRoute = ref("");

//methods

const handleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
const handleOpen = (key, keyPath) => {
  // menuItems.value[key - 1].icon += '5'
  counter.value++;
};
const handleClose = (key, keyPath) => {
  // menuItems.value[key - 1].icon = menuItems.value[key - 1].icon.replace(
  //     "5",
  //     ""
  // );
  counter.value++;
};
const handleSelect = (key, isMounted = false) => {
  menuItems.value.forEach((menu) => {
    if (menu.icon) menu.icon = menu.icon.replace("5", "");
  });
  if (menuItems.value[key - 1].icon) menuItems.value[key - 1].icon += "5";
  if (menuItems.value[key - 1].children.length == 0) {
    console.log(isMounted);
    if (isMounted == false) router.push(menuItems.value[key - 1].route);
  }
};
const routeChange = (item) => {
  console.log(item);
};
onMounted(() => {
  if (activeRoute.value && activeRoute.value > -1) {
    handleSelect(activeRoute.value + 1, true);
    if (menuItems.value[activeRoute.value].children.length > 0) {
      openedRoute.value = `${activeRoute.value + 1}`;
    }
  }
});
</script>
