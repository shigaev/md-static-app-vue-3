<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <RouterLink class="navbar-brand" to="/">{JS}</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/about">About</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import {RouterLink} from 'vue-router'

export default {
    name: "BaseHeader",
    components: {
        RouterLink
    }
}
</script>

<style lang="scss" scoped>
header {
    box-shadow: 0 2px 3px #00000017;

    .navbar-brand {
        color: #ffbb00;
        text-decoration: none;
    }
}
</style>