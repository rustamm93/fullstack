<template>
    <div class="row">
        <div 
            v-for="book of getBooks" 
            v-bind:key="book.id" 
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
        >
            <div class="card">
                <img src="img/sherlock.jpg" class="card-img-top" alt="sherlock-holmes-picture">
                <div class="card-body">
                    <h5 class="card-title">{{ book.name }}</h5>
                    <p class="card-text">{{ book.description }}</p>
                    <router-link to="/book-info" class="btn btn-primary">O'qish</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'BooksRow',
    computed: {
        ...mapGetters(['getBooks'])
    },
    methods: {
        ...mapActions(['fetchBooks'])
    },
    mounted() {
        console.log('booksRow yuklandi')
        this.fetchBooks()
    }
}
</script>

<style></style>
