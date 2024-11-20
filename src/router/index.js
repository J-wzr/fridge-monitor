// src/router/index.js
import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // Route guard to check if the route requires authentication
  Router.beforeEach((to, from, next) => {
    const auth = getAuth();
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    onAuthStateChanged(auth, (user) => {
      if (requiresAuth && !user) {
        next("/new-auth/new-login"); // Redirect to login if not authenticated
      } else if (user && to.path === "/new-auth/new-login") {
        next("/"); // Redirect to home if already logged in and trying to go to login
      } else {
        next(); // Allow the route to be accessed
      }
    });
  });

  return Router;
});
