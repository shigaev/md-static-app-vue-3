import {createRouter, createWebHistory} from "vue-router";
import ListVue from "@/data/vue/themes.json";
import NotFound from "@/views/NotFound.vue";

const layout = "base-layout";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/vue",
            name: "vue",
            meta: {
                title: "Vue",
                layout: layout,
            },
            component: () => import("../views/vue/Index.vue"),
        },
        {
            path: "/vue/:name",
            name: "view",
            meta: {
                title: "View",
                layout: layout,
            },
            component: () => import("../views/vue/View.vue"),
            beforeEnter(to) {
                const sitePath = to.path;
                const listThemes = ListVue.themes;
                const resultPath = listThemes.some(
                    (item) => item.urlPath === sitePath
                );

                if (!resultPath)
                    return {
                        name: "NotFound",
                        params: {pathMatch: to.path.substring(1).split("/")},
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
        {
            path: "/",
            name: "Main",
            meta: {
                title: "Main Component",
                layout: layout,
            },
            component: () => import("../views/Main.vue"),
        }
    ],
});

// Изменяет title страницы
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});
export default router;
