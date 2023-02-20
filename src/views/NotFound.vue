<template>
    <div class="container py-3">
        Error 404. Page not found. <br>
        <RouterLink class="not-found__link" to="/">
            Go to the home page ->
        </RouterLink>
</div>
</template>

<script>

export default {
    name: "NotFound"
}
</script>

<style lang="scss" scoped>
.not-found__link {
    text-decoration: none;
    color: cornflowerblue;
}
</style>