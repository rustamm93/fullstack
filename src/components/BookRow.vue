<template>
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
        <div class="card">
            <img src="img/sherlock.jpg" class="card-img-top" alt="sherlock-holmes-picture">
            <div class="card-body">
                <h5 class="card-title">Sherlock Holmes</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                <router-link to="/book-info" class="btn btn-primary">O'qish</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BookRow'
}
</script>

<style></style>
