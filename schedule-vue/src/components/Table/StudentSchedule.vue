<template>
  <div class="mx-5">
    <CourseDetails></CourseDetails>
    <table class="table table-bordered table-hover">
      <thead>
        <tr class="text-center table-header">
          <th style="width: 5%;">Час</th>
          <th v-for="day in days" :key="day.number" style="width: 16%;">
            {{ day.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in schedule" :key="day.pair" :rowspan="2">
          <td>{{ pairs[day.pair - 1].time }}</td>
          <ScheduleCell
            v-for="course in day.courses"
            :key="course[0]"
            :info="course"
          ></ScheduleCell>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>

<script>
import ScheduleCell from "./ScheduleCell";
import CourseDetails from "../Nested/CourseDetails";
export default {
  name: "StudentSchedule",
  components: { ScheduleCell, CourseDetails },
  data() {
    return {
      days: this.$store.getters["days"],
      pairs: this.$store.getters["pairs"],
      schedule: this.$store.getters["schedule"]
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";

.table-header th {
  border-color: $gray-border;
  background: $gray-fill;
}

.course_title {
  font-weight: bold;
}

.course_teacher {
  font-style: italic;
  color: $text-gray;
}

.pill {
  font-size: 12px;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 4px;
}
.code {
  color: white;
  background: $code_fill;
}

.lecture {
  color: white;
  background: $success;
}

.practice {
  color: white;

  background: $info;
  border-color: $info-border;
}
</style>
