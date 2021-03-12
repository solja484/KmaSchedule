<template>
  <div>
    <Header></Header>
    <div>
      <Breadcrumbs type="ALL"></Breadcrumbs>
      <SchedulesList></SchedulesList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Basic/Header";
import Footer from "../components/Basic/Footer";
import Breadcrumbs from "../components/Basic/Breadcrumbs";
import SchedulesList from "../components/Basic/SchedulesList";
export default {
  name: "Schedules",
  components: {SchedulesList, Breadcrumbs, Header, Footer }
};
</script>
