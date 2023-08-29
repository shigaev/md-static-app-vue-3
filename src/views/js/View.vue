<script>
import ListComponent from "@/components/common/ListComponent.vue";
import ListData from "@/data/js/themes.json";

import Index from "@/content/js/index.md";

export default {
    name: "View",
    components: {
        ListComponent,
        Index
    },
    data() {
        return {
            list: ListData
        }
    },
    computed: {
        dynamicComponent() {
            let content = '';
            for (let i = 0; i < this.list.themes.length; i++) {
                if (this.$route.path === this.list.themes[i].urlPath) {
                    content = this.list.themes[i].name;
                    document.title = this.list.themes[i].title;
                }
            }
            return content;
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-md-3">
            <ListComponent :list="list.themes"/>
        </div>
        <div class="col-md-9">
            <component :is="dynamicComponent"/>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>