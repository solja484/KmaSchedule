<template>
    <b-breadcrumb class="mx-5 my-3 active-color " :items="links"></b-breadcrumb>
</template>

<script>
    import {BBreadcrumb} from 'bootstrap-vue'

    export default {
        name: "Breadcrumbs",
        components: {BBreadcrumb},
        data() {
            return {
                links: this.$store.getters['breadcrumbs']
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/_variables.scss';
.active-color a{
    color:$breadcrumb-active;
}
</style>