<template>
    <BaseHeader/>
    <main class="container py-3">
        <RouterView/>
    </main>
    <BaseFooter/>
</template>

<script>

import BaseHeader from "@/layouts/base/BaseHeader.vue";
import BaseFooter from "@/layouts/base/BaseFooter.vue";

export default {
    name: "BaseLayout",
    components: {
        BaseHeader,
        BaseFooter
    }
}
</script>