<template>
    <div class="row">
        <div class="col-md-3">
            <h4>Заметки по темам</h4>
            <ListComponent :list="dataList.themes"/>
        </div>
        <div class="col-md-9">
            <h1>JavaScript</h1>
            <h4>Закрепить перед изучением Node.js</h4>
            <ul class="list">
                <hr>
                <span>Основные концепции</span>
                <hr>
                <li class="list__item" v-for="item in listData">
                    <a class="list__link" :href="item.link" target="_blank">{{ item.title }}</a>
                    <ul class="sub-list" v-if="item.dropdownList !== undefined">
                        <li class="sub-list__item" v-for="subItem in item.dropdownList">
                            <a class="sub-list__link" :href="subItem.link" target="_blank">{{ subItem.title }}</a>
                        </li>
                    </ul>
                </li>
                <hr>
                <span>Асинхронное программирование</span>
                <hr>
                <li class="list__item" v-for="item in asyncInJS">
                    <a class="list__link" :href="item.link" target="_blank">{{ item.title }}</a>
                    <ul class="sub-list" v-if="item.dropdownList !== undefined">
                        <li class="sub-list__item" v-for="subItem in item.dropdownList">
                            <a class="sub-list__link" :href="subItem.link" target="_blank">{{ subItem.title }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import ListComponent from "@/components/common/ListComponent.vue";
import ListData from "@/data/js/themes.json"

export default {
    name: "Index",
    components: {ListComponent},
    data() {
        return {
            dataList: ListData,
            listData: [
                {
                    id: 0,
                    title: "Лексическая структура",
                    link: "https://learn.javascript.ru/structure",
                },
                {
                    id: 1,
                    title: "Выражения",
                    link: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_operators",
                },
                {
                    id: 2,
                    title: "Типы",
                    link: "https://learn.javascript.ru/types",
                },
                {
                    id: 3,
                    title: "Переменные",
                    link: "https://learn.javascript.ru/variables",
                },
                {
                    id: 4,
                    title: "Функции",
                    link: "https://learn.javascript.ru/function-basics",
                },
                {
                    id: 5,
                    title: "this",
                    link: "https://learn.javascript.ru/object-methods",
                },
                {
                    id: 6,
                    title: "Стрелочные функции",
                    link: "https://learn.javascript.ru/arrow-functions-basics",
                },
                {
                    id: 7,
                    title: "Циклы",
                    link: "https://learn.javascript.ru/while-for",
                    dropdownList: [
                        {
                            id: 0,
                            title: "Циклы и области видимости",
                            link: "https://www.code.mu/ru/javascript/book/prime/loops/scope/",
                        },
                    ],
                },
                {
                    id: 9,
                    title: "Массивы",
                    link: "https://learn.javascript.ru/array",
                },
                {
                    id: 10,
                    title: "Шаблонные строки (MDN)",
                    link: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals",
                    dropdownList: [
                        {
                            id: 0,
                            title: "Шаблонные строки (Codechick)",
                            link: "https://codechick.io/tutorials/javascript/js-template-literals",
                        },
                    ],
                },
                {
                    id: 11,
                    title: "Точки с запятой",
                    link: "https://learn.javascript.ru/coding-style#tochka-s-zapyatoy",
                },
                {
                    id: 12,
                    title: "Строгий режим",
                    link: "https://learn.javascript.ru/strict-mode",
                },
                {
                    id: 13,
                    title: "EcmaScript 6+",
                    link: "https://www.youtube.com/playlist?list=PLA0M1Bcd0w8x9TltCzZDhw0SatK1d10yy",
                    dropdownList: [
                        {
                            id: 0,
                            title: "w3shools",
                            link: "https://www.w3schools.com/js/js_es6.asp",
                        },
                        {
                            id: 1,
                            title: "freecodecamp",
                            link: "https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/"
                        }
                    ]
                }
            ],
            asyncInJS: [
                {
                    id: 0,
                    title: "Асинхронное программирование и колбэки",
                    link: "https://learn.javascript.ru/callbacks",
                },
                {
                    id: 1,
                    title: "Таймеры",
                    link: "https://learn.javascript.ru/settimeout-setinterval",
                },
                {
                    id: 2,
                    title: "Промисы",
                    link: "https://learn.javascript.ru/promise-basics",
                },
                {
                    id: 3,
                    title: "Async/await",
                    link: "https://learn.javascript.ru/async-await"
                },
                {
                    id: 4,
                    title: "Замыкания",
                    link: "https://learn.javascript.ru/closure"
                },
                {
                    id: 5,
                    title: "Цикл событий / Event loop",
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop",
                    dropdownList: [
                        {
                            id: 0,
                            title: "Как писать эффективный код на JavaScript с помощью Event Loop",
                            link: "https://tproger.ru/blogs/effective-code-in-js-with-event-loop/"
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped lang="scss">
.list {
    background-color: #ffffff;
    padding: 15px 30px;

    &__item {

    }

    &__link {
        text-decoration: none;
    }

}

.sub-list {
    &__item {

    }

    &__link {
        text-decoration: none;
    }
}
</style>