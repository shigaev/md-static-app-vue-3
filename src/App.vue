<template>
    <component :is="layout"/>
</template>

<script>

import BaseLayout from "@/layouts/base/BaseLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import NotFoundLayout from "@/layouts/NotFoundLayout.vue";

export default {
    components: {
        BaseLayout,
        EmptyLayout,
        NotFoundLayout
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || 'empty-layout');
        }
    }
}

</script>