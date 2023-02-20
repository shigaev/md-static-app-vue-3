<template>
    <ul class="list">
        <RouterLink v-for="(item, index) in list.themes" :key="index" class="list-item__link" :to="item.urlPath">
            <li class="list-item">
                {{ item.title }}
            </li>
        </RouterLink>
    </ul>
</template>

<script>

import list from './list.json'

export default {
    name: "List",
    data() {
        return {
            list: list
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    background-color: #ffffff;
    border-radius: 5px;
    list-style: none;
    padding: 10px;

    .list-item__link {
        text-decoration: none;
        color: #7700ff;

        .list-item {
            padding: 5px;
            border-radius: 5px;
            transition: .2s;

            &:hover {
                background-color: #edf4ff;
            }
        }
    }

}
</style>