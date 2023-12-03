<template>
    <div class="col-12 col-md-2">
        <div 
            v-for="category of getCategories" 
            v-bind:key="category.id" 
            class="list-group"
        >
            <a href="#" class="list-group-item list-group-item-action">{{ category.name }}</a>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'SideBar',
    computed: {
        ...mapGetters(['getCategories'])
    },
    methods: {
        ...mapActions(['fetchCategories'])
    },
    mounted() {
        console.log('categoriesRow yuklandi')
        this.fetchCategories()
    }
}
</script>

<style></style>
