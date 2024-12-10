/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */
// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import Home from "@/pages/index.vue";
import Searchlist from "@/pages/search/list.vue";
const route = [
    { path: "/", name: "Home", component: Home },
    {
        path: "/list",
        component: Searchlist,
    },
    { path: "/user/:id", name: "User", component: () => import("@/pages/search/result.vue") },
    ...routes,
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: route,
});
// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
    if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
        if (!localStorage.getItem("vuetify:dynamic-reload")) {
            console.log("Reloading page to fix dynamic import error");
            localStorage.setItem("vuetify:dynamic-reload", "true");
            location.assign(to.fullPath);
        }
        else {
            console.error("Dynamic import error, reloading page did not fix it", err);
        }
    }
    else {
        console.error(err);
    }
});
router.isReady().then(() => {
    localStorage.removeItem("vuetify:dynamic-reload");
});
export default router;