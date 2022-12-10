import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/pages/Home.vue"),
      },
      {
        path: "/training",
        name: "training",
        component: () => import("@/pages/Training.vue"),
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/pages/User.vue"),
      },
    ],
  },
  // {
  //   path: "/sign-in",
  //   name: "sign-in",
  //   component: () => import("@/views/auth/SignIn.vue"),
  // },
  // {
  //   path: "/sign-up",
  //   name: "sign-up",
  //   component: () => import("@/views/auth/SignUp.vue"),
  // },
  // {
  //   path: "/password-reset",
  //   name: "password-reset",
  //   component: () => import("@/views/auth/PasswordReset.vue"),
  // },
  // {
  //   // the 404 route, when none of the above matches
  //   path: "/404",
  //   name: "404",
  //   component: () => import("@/views/error/Error404.vue"),
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: "/404",
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
