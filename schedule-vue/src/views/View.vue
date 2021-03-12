<template>
    <div>
        <Header></Header>
        <Breadcrumbs type="VIEW"></Breadcrumbs>
        <ScheduleInfo ></ScheduleInfo>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Basic/Header";
    import Breadcrumbs from "../components/Basic/Breadcrumbs";
    import ScheduleInfo from "../components/Basic/ScheduleInfo";
    import Footer from "../components/Basic/Footer";

    export default {
        name: "ViewPage",
        components: {Footer, ScheduleInfo, Breadcrumbs, Header},
        mounted() {
            this.$store.dispatch('fetchScheduleInfo', this.$route.params.code).then(() => {
            });
        }
    };
</script>

<style scoped></style>
