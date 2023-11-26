<template>
    <BookRow />

    <PaginationRow />
</template>

<script>
import BookRow from '@/components/BookRow.vue';
import PaginationRow from '@/components/PaginationRow.vue';


export default {
    name: "HomePage",
    components: { PaginationRow, BookRow }
}
</script>

<style></style>
