<template>
  <div>
    <button
      @click="newSchedule()"
      class="btn btn-light mx-5 add-schedule-button"
    >
      <b-icon-plus class="bigger"></b-icon-plus>
      Додати розклад
    </button>
    <Title message="Розклади за спеціальністю" additional=""></Title>
    <ScheduleBlock type="speciality"></ScheduleBlock>
    <Title message="Розклади за кафедрами" additional=""></Title>
    <ScheduleBlock type="subfaculty"></ScheduleBlock>
    <Title message="Розклади сесії" additional=""></Title>
    <ScheduleBlock type="session"></ScheduleBlock>
  </div>
</template>

<script>
import Title from "../Nested/Title";
import ScheduleBlock from "../Nested/ScheduleBlock";
import { CurrentState } from "../../models/entities/CurrentState";
import { BIconPlus } from "bootstrap-vue";

export default {
  name: "MetodistList",
  components: { Title, ScheduleBlock, BIconPlus },
  methods: {
    newSchedule: function() {
      this.$store
        .dispatch("changeCurrentState", CurrentState.SCHEDULE_NEW)
        .then(() => {
          this.$router.push("/schedules/new");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";

.add-schedule-button {
  font-size: 20px;
  background: $gray-fill;
  border-color: $gray-border;
  float: right;
}

.text-16 {
  font-size: 16px;
  text-align: left;
}

.text-18 {
  font-size: 18px;
}

.border-none,
.border-none:active,
.border-none:focus,
.border-none:hover {
  border: none;
}

.spoiler-colors {
  color: $spoiler-text;
  background: $spoiler-fill;
  border-color: $spoiler-border;
}
</style>
