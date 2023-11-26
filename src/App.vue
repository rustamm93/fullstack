<template>
    <div class="container-fluid">
        <!-- navbar boshlandi -->
        <HeaderRow />
        <!-- navbar tugadi -->

        <!-- main qator boshlandi -->
        <div class="row mt-4">

            <!-- sidebar boshlandi -->
            <SideBar />
            <!-- sidebar tugadi -->

            <!-- kontent qism bowlandi -->
            <div class="col-12 col-md-10 mt-4 mt-md-0">
                <router-view />
            </div>
            <!-- kontent qism tugadi -->

        </div>
        <!-- main qator tugadi -->

        <!-- footer qator boshlandi -->
        <FooterRow />
        <!-- footer qator tugadi -->
    </div>
</template>

<script>
import HeaderRow from './components/HeaderRow.vue';
import SideBar from './components/SideBar.vue';
import FooterRow from './components/FooterRow.vue';


export default {
    name: 'App',
    components: {
    HeaderRow,
    SideBar,
    FooterRow
}
}
</script>

<style></style>
