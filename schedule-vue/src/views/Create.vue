<template>
    <div>
        <Header></Header>
        <Breadcrumbs type="CREATE"></Breadcrumbs>
        <ScheduleInfoEditable></ScheduleInfoEditable>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Basic/Header";
    import Breadcrumbs from "../components/Basic/Breadcrumbs";
    import Footer from "../components/Basic/Footer";
    import ScheduleInfoEditable from "../components/Basic/ScheduleInfoEditable";

    export default {
        name: "Create",
        components: {ScheduleInfoEditable, Footer, Breadcrumbs, Header}
    };
</script>

<style scoped></style>
