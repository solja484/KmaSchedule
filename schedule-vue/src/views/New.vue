<template>
  <div>
    <Header></Header>
    <Breadcrumbs type="CREATE"></Breadcrumbs>
    <NewSchedule></NewSchedule>
  </div>
</template>

<script>
import Header from "../components/Basic/Header";
import NewSchedule from "../components/Basic/NewSchedule";
import Breadcrumbs from "../components/Basic/Breadcrumbs";
export default {
  name: "New",
  components: { Breadcrumbs, Header, NewSchedule }
};
</script>

<style scoped></style>
