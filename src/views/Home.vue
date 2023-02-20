<template>
    <div class="row">
        <div class="col-md-3">
            <List/>
        </div>
        <div class="col-md-9">
            <Preview/>
        </div>
    </div>
</template>

<script>

import List from "@/components/home/List.vue";
import Preview from "@/components/home/Preview.vue";

export default {
    name: "HomeView",
    data() {
        return {}
    },
    components: {
        List,
        Preview
    }
}

</script>