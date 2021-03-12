<template>
  <div>
    <Header></Header>
    <Breadcrumbs type="MAIN"></Breadcrumbs>
    <div class="mx-5">
      KMA Schedule main page
    </div>
  </div>
</template>

<script>
import Header from "../components/Basic/Header";
import Breadcrumbs from "../components/Basic/Breadcrumbs";
export default {
  name: "Main",
  components: { Header, Breadcrumbs }
};
</script>

<style scoped></style>
