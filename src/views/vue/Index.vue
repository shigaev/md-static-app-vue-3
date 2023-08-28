<template>
    <div class="row">
        <div class="col-md-3">
            <ListComponent :list="dataList.themes"/>
        </div>
        <div class="col-md-9">
            <h1>Vue</h1>
            <VueLogo/>
        </div>
    </div>
</template>

<script>

import ListComponent from '@/components/common/ListComponent.vue';
import VueLogo from "@/components/icons/VueLogo.vue";
import ListData from '@/data/vue/themes.json';

export default {
    name: "Index",
    components: {
        ListComponent,
        VueLogo,
        ListData
    },
    data() {
        return {
            dataList: ListData
        };
    }
};
</script>