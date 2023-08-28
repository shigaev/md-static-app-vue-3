<template>
    <div class="categories">
        <div class="row">
            <div class="col-md-4" v-for="item in data.categories">
                <div class="card my-3">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>
                        <RouterLink class="btn btn-primary" :to="item.link">Go somewhere</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import dataCategories from "@/data/common/categories.json";

export default {
    name: "Categories",
    data() {
        return {
            data: dataCategories
        };
    }
};

</script>