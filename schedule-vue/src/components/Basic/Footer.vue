<template>
    <footer
            class="navbar bottom footer d-flex justify-content-between px-5 py-4 mt-4 ">
    <span class="text-black">
        <a href="https://www.ukma.edu.ua/">National University of Kyiv-Mohyla Academy</a>
      2021
    </span>
        <span class="text-black"
        >Контакти:<a href="mailto:my@ukma.edu.ua"> my@ukma.edu.ua</a>
    </span>
    </footer>

</template>

<script>
    export default {
        name: "Footer"
    };
</script>

<style scoped lang="scss">
    @import "../../assets/scss/_variables.scss";

    .footer {
        background: $gray-fill;
        width: 100%;
    }

    .footer a {
        color: $breadcrumb-active;
    }
</style>
