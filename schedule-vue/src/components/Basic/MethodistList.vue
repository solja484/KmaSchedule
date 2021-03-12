<template>
  <div class="mx-5">
    <br>
    <button
      @click="newSchedule()"
      class="btn btn-light mx-5 add-schedule-button">
      <b-icon-plus class="bigger"></b-icon-plus>
      Додати розклад
    </button>
    <Title message="Розклади за спеціальністю" additional=""></Title>
    <ScheduleListELem class="mx-5" v-for="s in getSchedulesByType(speciality)" :key="s.id" :code="s.code" :title="s.title"></ScheduleListELem>
    <Title message="Розклади за кафедрами" additional=""></Title>
    <ScheduleListELem class="mx-5" v-for="s in getSchedulesByType(sub_faculty)" :key="s.id" :code="s.code" :title="s.title"></ScheduleListELem>
    <Title message="Розклади сесії" additional=""></Title>
    <ScheduleListELem class="mx-5" v-for="s in getSchedulesByType(session)" :key="s.id" :code="s.code" :title="s.title"></ScheduleListELem>

  </div>
</template>

<script>
import Title from "../Nested/Title";
import { CurrentState } from "../../models/entities/CurrentState";
import {ScheduleType} from "../../models/entities/ScheduleType";
import { BIconPlus } from "bootstrap-vue";
import ScheduleListELem from "../Nested/ScheduleListELem";

export default {
  name: "MethodistList",
  components: {ScheduleListELem, Title, BIconPlus },
  data(){
    return{
      speciality:ScheduleType.SPECIALITY,
      sub_faculty:ScheduleType.SUBFACULTY,
      session:ScheduleType.SESSION,
      methodist:this.$store.getters['user'].methodist,
      methodistSchedules:this.$store.getters['methodistSchedules']
    }
  },
  methods: {
    getSchedulesByType:function(type){
      return this.methodistSchedules.filter(s=>s.schedule_type==type);
    },
    newSchedule: function() {
      this.$store
        .dispatch("changeCurrentState", CurrentState.SCHEDULE_NEW)
        .then(() => {
          this.$router.push("/schedules/new");
        })
        .catch(err => console.log(err));
    }
  },
  mounted(){
    this.$store.dispatch('fetchMethodistSchedules');
  }
};
</script>

<style lang="scss" scoped>
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

</style>
