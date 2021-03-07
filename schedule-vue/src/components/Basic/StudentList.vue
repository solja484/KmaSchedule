<template>
  <div class=" mx-0 px-5 h-75">
    <Title :message="titles[0]" :additional="titles[2]"></Title>
    <Title :message="titles[1]" :additional="titles[2]"></Title>
  </div>
</template>

<script>
import Title from "../Nested/Title";

export default {
  name: "StudentList",
  components: { Title },
  data() {
    return {
      faculties: this.$store.getters["faculties"],
      speciality: this.$store.getters["speciality"],
      titles: [
        "Розклад дисциплін",
        "Розклад за кафедрами",
        "Весна, 2020-2021н.р."
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/_variables.scss";
.spoiler-colors {
  color: $spoiler-text;
  background: $spoiler-fill;
  border-color: $spoiler-border;
}
</style>
