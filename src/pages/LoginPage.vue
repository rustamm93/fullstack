<template>
    <form class="col-6" @submit.prevent="auth">
        <div class="mb-3">
            <label for="inputEmail3" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail3" area-describedby="emailHelp" v-model="form.email">
        </div>
        <div class="mb-3">
            <label for="inputPassword3" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword3" v-model="form.password">
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "LoginPage",
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(["fetchUserToken", "fetchCategories"]),
        auth() {
            this.fetchUserToken(this.form)
                .then(()=>{
                    console.log('login ok')
                    this.fetchCategories()
                    this.$router.push('/')
                })
            console.log('bu login auth funk')
        }
    }
}
</script>

<style></style>
