<template>
    <div class="row">
        <div class="col-lg-3">
            <!--<div v-for="(item, index) in anchor" :key="index">
                {{ item['anchor'] }}
            </div>-->
            <ComponentList />
        </div>
        <div class="col-lg-7">
            <div class="content">
                <component :is="dynamicComponent" />
            </div>
        </div>
        <div class="col-lg-2"></div>
    </div>
</template>

<script>

/**
 * https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
 */
import list from '../components/home/list.json'
import ComponentList from '../components/home/List.vue'

// Content markdown files
import Recursion from '../content/recursion/recursion.md'
import Parameters from '../content/parameters/parameters.md'
import Closure from '../content/closure/closure.md'
import Scope from '../content/scope/scope.md'

// 404 Page
import NotFound from "../views/NotFound.vue";

export default {
    name: "HomeView",
    data() {
        return {
            list: list
        }
    },
    components: {
        Recursion,
        Parameters,
        Closure,
        Scope,
        ComponentList,
        NotFound
    },
    computed: {
        dynamicComponent() {
            let content = ''
            for (let i = 0; i < this.list.themes.length; i++) {
                if (this.$route.path === this.list.themes[i].urlPath) {
                    content = this.list.themes[i].urlPath.replace('/', '')
                    document.title = this.list.themes[i].title
                }
            }
            return content
        },
        anchor() {
            let locate = location.pathname.replace('/', '')
            let arr = ''

            const currentPath = list.themes.map(function (item) {
                if (item.urlPath === locate) return item
            })

            for (let i = 0; i < currentPath.length; i++) {
                if (currentPath[i] === undefined) continue
                else {
                    arr = currentPath[i].anchor
                }
            }
            return arr
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
}
</style>