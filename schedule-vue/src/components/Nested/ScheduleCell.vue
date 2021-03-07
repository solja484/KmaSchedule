<template>
  <td>
    <p class="m-0">
      <span class="pill code">224455</span
      ><span class="pill lecture mx-1">Лекція</span>
    </p>
    <p class="course_title p-0 m-0">{{ info[0] }}</p>
    <p class="course_teacher p-0 m-0">П.І.Б. викладача</p>
    <p></p>
  </td>
</template>

<script>
export default {
  name: "ScheduleCell",
  props: ["info"]
};
</script>

<style scoped></style>
