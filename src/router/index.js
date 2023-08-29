import {createRouter, createWebHistory} from "vue-router";
import ListVue from "@/data/vue/themes.json";
import ListJS from "@/data/js/themes.json";
import NotFound from "@/views/NotFound.vue";

const layout = "base-layout";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/vue",
            name: "Vue",
            meta: {
                title: "Vue",
                layout: layout,
            },
            component: () => import("../views/vue/Index.vue"),
        },
        {
            path: "/vue/:name",
            name: "Vue view",
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
            path: "/js",
            name: "Js",
            meta: {
                title: "JS",
                layout: layout,
            },
            component: () => import("../views/js/Index.vue"),
        },
        {
            path: "/js/:name",
            name: "Js view",
            meta: {
                title: "View",
                layout: layout,
            },
            component: () => import("../views/js/View.vue"),
            beforeEnter(to) {
                const sitePath = to.path;
                const listThemes = ListJS.themes;
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
            path: "/",
            name: "Main",
            meta: {
                title: "Main Component",
                layout: layout,
            },
            component: () => import("../views/Main.vue"),
        },
        {
            path: "/collecting-information",
            name: "Collecting information",
            meta: {
                title: "Collecting information",
                layout: layout,
            },
            component: () => import("../views/СollectingInformation.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            meta: {
                title: "Error 404",
                layout: "not-found-layout",
            },
            component: NotFound,
        }
    ],
});

// Изменяет title страницы
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});
export default router;
