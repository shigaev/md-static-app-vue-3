<template>
    <ul class="list" @click="selected">
        <RouterLink v-for="(item, i) in someDataList"
                    :index="i"
                    :to="item.urlPath"
                    class="list-item__link"
        >
            <li class="list-item" :class="{active: item.classActive}">
                {{ item.title }}
            </li>
        </RouterLink>
    </ul>
</template>

<script>

export default {
    name: "Index",
    props: ['list'],
    data() {
        return {
            someDataList: this.list,
        };
    },
    methods: {
        selected() {
            this.someDataList.forEach((item) => {
                item.classActive = location.pathname === item.urlPath;
            });
        }
    },
    mounted() {
        this.selected();
    }
};
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
            margin: 5px 0;
            border-radius: 5px;
            transition: .2s;

            &:hover {
                background-color: #edf4ff;
            }
        }

        .list-item.active {
            background-color: #edf4ff;
        }
    }
}
</style>