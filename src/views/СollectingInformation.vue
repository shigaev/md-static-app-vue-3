<template>
    <h1>Сбор информации</h1>
    <hr>
    <h4>По ВУЗам</h4>
    <hr>
    <a href="https://mipt.ru/" target="_blank">
        <img class="image" src="@/assets/img/mfti.svg" alt="">
    </a>
    <div class="notes">
        <p>- Найти ВУЗовские программы обучения</p>
        <p>- Найти курсы от этих вузов</p>
        <p>- Узнать, есть ли переподготовка от этих вузов</p>
    </div>
</template>
<script>
export default {
    name: "CollectingInformation"
}
</script>
<style scoped lang="scss">
.notes {
    padding: 10px;
    margin: 10px 5px;
    color: #ffffff;
    max-width: 600px;
    border-radius: 10px;
    background-color: #005892;
    box-shadow: 0 3px 10px #0000006e;
}

.image {
    max-width: 200px;
}
</style>