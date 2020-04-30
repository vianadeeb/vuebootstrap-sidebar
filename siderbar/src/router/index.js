import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/layouts/main.vue"),
    children: [
      {
        path: "/reports",
        name: "Reports",
        component: () => import("../views/Reports.vue"),
      },
      {
        path: "/orders",
        name: "Orders",
        component: () => import("../views/Orders.vue"),
      },
      {
        path: "/myorders",
        name: "Myorders",
        component: () => import("../views/Myorders.vue"),
      },
      {
        path: "/drivers",
        name: "Drivers",
        component: () => import("../views/Drivers.vue"),
      },
      {
        path: "/porfile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
      },
      {
        path: "/administration",
        name: "Administration",
        component: () => import("../views/Administration.vue"),
      },
    ],
   
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    // meta:{
    //   title : "لوحة تسجيل الدخول"
    // }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
