<template>
  <div>
    <div v-for="f in faculties" :key="f.id" class="mx-5">
      <button
        v-b-toggle="'col' + type + f.id"
        class="btn btn-sm btn-block spoiler-colors text-16 mb-1"
      >
        {{ f.name }}
      </button>
      <b-collapse
        :id="'col' + type + f.id"
        class="mt-2"
        v-if="type != 'subfaculty'"
      >
        <div v-for="l in levels" :key="l.course" class="mx-5">
          <button
            v-b-toggle="'col-sub-' + type + l.course"
            class="btn btn-sm btn-block text-16 mb-1"
          >
            {{ l.title }} <i class="fa fa-sort-down"></i>
          </button>
          <b-collapse :id="'col-sub-' + type + l.course" class="mt-2">
            <ScheduleListELem></ScheduleListELem>
            <ScheduleListELem></ScheduleListELem>
            <ScheduleListELem></ScheduleListELem>
          </b-collapse>
        </div>
      </b-collapse>
      <b-collapse :id="'col' + type + f.id" class="mt-2" v-else>
        <div v-for="s in subfaculty" :key="s.id" class="mx-5">
          <button
            v-b-toggle="'col-sub-' + s.id"
            v-if="s.faculty_id == f.id"
            class="btn btn-sm btn-block text-16 mb-1"
          >
            {{ s.name }} <i class="fa fa-sort-down"></i>
          </button>
          <b-collapse
            :id="'col-sub-' + s.id"
            class="mt-2"
            v-if="s.faculty_id == f.id"
          >
            <ScheduleListELem></ScheduleListELem>
            <ScheduleListELem></ScheduleListELem>
            <ScheduleListELem></ScheduleListELem>
          </b-collapse>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import ScheduleListELem from "../Nested/ScheduleListELem";
import { BCollapse } from "bootstrap-vue";

export default {
  name: "ScheduleBlock",
  components: { ScheduleListELem, BCollapse },
  data() {
    return {
      faculties: this.$store.getters["faculties"],
      subfaculty: this.$store.getters["subfaculty"],
      speciality: this.$store.getters["speciality"],
      levels: this.$store.getters["levels"]
    };
  },
  props: ["type"]
};
</script>

<style scoped></style>
