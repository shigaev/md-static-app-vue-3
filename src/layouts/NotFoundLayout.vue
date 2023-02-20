<template>
    <div class="not-found h-100">
        <RouterView />
        <div class="not-found__inner"></div>
</div>
</template>

<script>
export default {
    name: "NotFoundLayout"
}
</script>

<style lang="scss" scoped>
.not-found {
    color: cadetblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 25px;

    &__inner {
        width: 100px;
        height: 100px;
        background: url("../assets/img/error-404.png") no-repeat center center;
        background-size: contain;
    }
}
</style>