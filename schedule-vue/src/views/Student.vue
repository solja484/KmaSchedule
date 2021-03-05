<template>
    <div>
        <Header></Header>
        <Breadcrumbs></Breadcrumbs>
        <div class="text-center line-height-5 m-5">
            <p><b>Користувач</b></p>
            <p>{{user.name}}</p>
            <p><b>Роль</b></p>
            <p>{{user.role}}</p>
            <p><b>Етап</b></p>
            <p>Презентації курсів</p>
        </div>
        <Title message="Розклад" additional="" class="text-center"></Title>
        <StudentSchedule></StudentSchedule>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Basic/Header";
    import Footer from "../components/Basic/Footer";
    import Breadcrumbs from "../components/Basic/Breadcrumbs";
    import StudentSchedule from "../components/Table/StudentSchedule";
    import Title from "../components/Nested/Title";
    export default {
        name: "Student",
        components: {Header, Breadcrumbs, StudentSchedule, Title, Footer},
        methods: {},
        mounted() {
        },
        data() {
            return {
                user: this.$store.getters['user']
            }
        }
    };
</script>

<style scoped>
    .line-height-5 {
        line-height: 7px;
    }

</style>