<template>
  <div v-if="userRole != guest">
    <Header></Header>
    <div >
    <Breadcrumbs></Breadcrumbs>
    <MetodistList v-if="userRole == metodist"></MetodistList>
    <StudentList v-else></StudentList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { Role } from "../models/entities/Role";
import Header from "../components/Basic/Header";
import Footer from "../components/Basic/Footer";
import Breadcrumbs from "../components/Basic/Breadcrumbs";
import StudentList from "../components/Basic/StudentList";
import MetodistList from "../components/Basic/MetodistList";
export default {
  name: "Main",
  components: { MetodistList, StudentList, Breadcrumbs, Header, Footer },
  data() {
    return {
      state: this.$store.getters["currentState"],
      userRole: this.$store.getters["role"],
      student: Role.STUDENT,
      metodist: Role.METODIST,
      guest: Role.GUEST
    };
  }
};
</script>
