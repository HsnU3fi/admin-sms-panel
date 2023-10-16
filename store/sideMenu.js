import { defineStore } from "pinia";
import { ref } from "vue";
export const useSidemenuStore = defineStore("sidemenuStore", () => {
  const menuItems = ref([
    {
      title: "Dashboard",
      route: "/dashboard",
      icon: "element-45",
      children: [],
    },
    {
      title: "Billing",
      route: "",
      icon: "book",
      children: [
        {
          route: "/billing/overview",
          title: "Overview",
        },
        {
          route: "/billing/payment/history",
          title: "Payment history",
        },
        {
          route: "/billing/payment/settings",
          title: "Payment settings",
        },
        {
          route: "/billing/invoice",
          title: "Invoice",
        },
      ],
    },
    {
      title: "Monitoring",
      route: "/reports",
      icon: "presention-chart",
      children: [],
    },
    {
      title: "Wallets",
      route: "/wallets",
      icon: "wallet",
      children: [],
    },
    {
      title: "Apps",
      isButton: true,
      route: "/apps",
      icon: "color-swatch",
      children: [],
    },
    {
      header: "Quick access",
      children: [],
    },
    {
      title: "Phone numbers",
      route: "/phone-numbers",
      icon: "call-incoming",
      children: [
        {
          route: "/phone-numbers/active-numbers",
          title: "Active Numbers",
        },
        {
          route: "/phone-numbers/release-numbers",
          title: "Release Numbers",
        },
        {
          route: "/phone-numbers/buy-number",
          title: "Buy a Number",
        },
      ],
    },
    {
      title: "Domains",
      route: "/domains",
      icon: "global",
      children: [],
    },
    {
      title: "SSL",
      route: "/ssl",
      icon: "lock",
      children: [],
    },
    {
      title: "Marketing tools",
      route: "/marketing-tools",
      icon: "designtools",
      children: [],
    },
    {
      title: "Marketing place",
      route: "/domains",
      icon: "location-tick",
      children: [],
    },
    {
      title: "Affilates",
      route: "/affiliates",
      icon: "data",
      children: [],
    },
    {
      title: "Docs",
      isButton: true,
      route: "",
      icon: "document-text",
      children: [
        {
          title: "Developer Docs",
          route: "",
          icon: "presention-chart",
        },
        {
          title: "Take a console tour",
          route: "",
          icon: "presention-chart",
        },
        {
          title: "Privacy Policy",
          route: "",
          icon: "presention-chart",
        },
        {
          title: "Terms of services",
          route: "",
          icon: "presention-chart",
        },
      ],
    },
  ]);
  const isMenuClose = ref(true);
  const route = useRoute();
  const activeTab = computed(() => {
    let fullPath = route.fullPath;
    let splitRoute = fullPath.split("/");
    let active = "";
    if (splitRoute.length > 1) {
      active = menuItems.value.findIndex(
        (item) => item.route == `/${splitRoute[1]}`
      );
    }
    return active;
  });

  // methods
  const toggleShowMenu = (value) => {
    isMenuClose.value = value;
  };
  return {
    menuItems,
    activeTab,
    isMenuClose,
    toggleShowMenu,
  };
});
