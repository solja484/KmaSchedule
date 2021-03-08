<template>
  <div>
    <Header></Header>
    <Breadcrumbs ></Breadcrumbs>
    <NewSchedule></NewSchedule>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Basic/Header";
import Footer from "../components/Basic/Footer";
import NewSchedule from "../components/Basic/NewSchedule";
import Breadcrumbs from "../components/Basic/Breadcrumbs";
export default {
  name: "New",
  components: {Breadcrumbs, Footer, Header,NewSchedule}
};
</script>

<style scoped></style>
