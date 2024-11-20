const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
        meta: { requiresAuth: true }, // Add this line to require authentication
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      { path: "login", component: () => import("pages/LoginPage.vue") },
    ],
  },

  {
    path: "/new-auth",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "new-register",
        component: () => import("pages/NewRegisterPage.vue"),
      },
    ],
  },
  {
    path: "/new-auth",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "new-login",
        name: "login",
        component: () => import("pages/NewLoginPage.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
