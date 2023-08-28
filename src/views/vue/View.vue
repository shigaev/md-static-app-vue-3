<template>
    <div class="row">
        <div class="col-md-3">
            <ListComponent :list="list.themes"/>
        </div>
        <div class="col-md-9">
            <div class="content">
                <h1>Vue</h1>
                <VueLogo/>
                <component :is="dynamicComponent"/>
            </div>
        </div>
    </div>
</template>

<script>

import ListData from "@/data/vue/themes.json";
import ListComponent from "@/components/common/ListComponent.vue";

// Content components
import Introduction from '@/content/vue/introduction.md';
import Routing from '@/content/vue/routing.md';
import VueLogo from "@/components/icons/VueLogo.vue";

export default {
    name: "View",
    data() {
        return {
            list: ListData,
        };
    },
    props: ['title'],
    components: {
        VueLogo,
        Introduction,
        Routing,
        ListComponent,
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
        },
    },
};
</script>