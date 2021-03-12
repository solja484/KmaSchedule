<template>
  <div>
    <Header></Header>
    <Breadcrumbs type="PROFILE"></Breadcrumbs>
    <UserInfo></UserInfo>
    <Title v-if="role==student" message="Розклад" additional="" class="text-center"></Title>
    <StudentSchedule v-if="role==student"></StudentSchedule>
    <MetodistList v-if="role==methodist"></MetodistList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Basic/Header";
import Footer from "../components/Basic/Footer";
import UserInfo from "../components/Basic/UserInfo";
import Breadcrumbs from "../components/Basic/Breadcrumbs";
import StudentSchedule from "../components/Table/StudentSchedule";
import Title from "../components/Nested/Title";
import {Role} from "../models/entities/Role";
import MetodistList from "../components/Basic/MetodistList";

export default {
  name: "Profile",
  components: {MetodistList, Header, Breadcrumbs, StudentSchedule, UserInfo, Title, Footer },
  data(){
    return {
    role:this.$store.getters['role'] ,
    student:Role.STUDENT,
    methodist:Role.METHODIST
    }
  },
  mounted() {
    this.$store.dispatch("fetchUserCourses");
  }
};
</script>

<style scoped>
.line-height-5 {
  line-height: 7px;
}
</style>
