<template>
    <div class="footer d-flex justify-content-between px-5 py-3 mt-2">
        <span class="text-black"><a href="https://www.ukma.edu.ua/">National University of Kyiv-Mohyla Academy</a> 2021  </span>
        <span class="text-black">Контакти:<a href="mailto:my@ukma.edu.ua">  my@ukma.edu.ua</a> </span>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/_variables.scss';

    .footer {
        background: $table-th-fill;
    }

    .footer a {
        color: $breadcrumb-active;
    }
</style>