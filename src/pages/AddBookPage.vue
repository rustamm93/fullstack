<template>
    <form class="col-6" @submit.prevent="addNewBook">
        <div class="mb-3">
            <label for="bookName" class="form-label">Kitob nomi</label>
            <input type="text" class="form-control" id="bookName" area-describedby="emailHelp" v-model="form.name">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Izoh</label>
            <input type="text" class="form-control" id="description" v-model="form.description">
        </div>
        <div class="mb-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Kategoriya tanlang</option>
                <option 
                v-for="category of getCategories" 
                v-bind:key="category.id" 
                class="list-group-item list-group-item-action"
                :value="'/api/categories/'+category.id"
                >{{ category.name }}</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Qo'shish</button>
    </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AddBookPage",
    computed: {
        ...mapGetters(['getCategories'])
    },
    data() {
        return {
            form: {
                name: '',
                description: '',
                category: ''
            }
        }
    },
    methods: {
        ...mapActions(["addBook", "fetchCategories"]),
        addNewBook() {
            this.addBook(this.form)
                .then(()=>{
                    console.log('addBook ok')
                    this.fetchCategories()
                    this.$router.push('/')
                })
            console.log('bu addBook funk')
        }
    }
}
</script>

<style></style>
