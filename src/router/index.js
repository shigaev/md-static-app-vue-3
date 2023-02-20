import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import List from "@/components/home/list.json";
import NotFound from "@/views/NotFound.vue";

const layout = "base-layout";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            meta: {
                title: "Home",
                layout: layout,
            },
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            meta: {
                title: "About",
                layout: layout,
            },
            component: () => import("../views/About.vue"),
        },
        {
            path: "/:name",
            name: "name",
            meta: {
                title: "",
                layout: layout,
            },
            component: () => import("../views/HomeView.vue"),
            beforeEnter(to) {
                const sitePath = to.path;
                const listThemes = List.themes;
                const resultPath = listThemes.some(
                    (item) => item.urlPath === sitePath
                );

                if (!resultPath)
                    return {
                        name: "NotFound",
                        params: { pathMatch: to.path.substring(1).split("/") },
                        query: to.query,
                        hash: to.hash,
                    };
            },
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            meta: {
                title: "Error 404",
                layout: "not-found-layout",
            },
            component: NotFound,
        },
    ],
});

// Изменяет title страницы
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});
export default router;
