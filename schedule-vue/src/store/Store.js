import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";
import { CurrentState } from "../models/entities/CurrentState";
import { Role } from "../models/entities/Role";
import { breadcrumbs } from "../assets/breadcrumbs";
import { levels } from "../assets/levels";

Vue.use(Vuex);

let user_hardcoded = {
  code: "204186",
  name: "Андрусів Соломія Ігорівна",
  role: "Методист",
  faculty: "123"
};
let schedule_hardcoded = [
  {
    pair: 1,
    courses: {
      Mon: ["Понеділок 1 пара"],
      Tue: ["Вівторок 1 пара"],
      Wed: ["Середа 1 пара"],
      Thu: ["Четвер 1 пара"],
      Fri: ["П'ятниця 1 пара"],
      Sat: ["Субота 1 пара"]
    }
  },
  {
    pair: 2,
    courses: {
      Mon: ["Понеділок 2 пара"],
      Tue: ["Вівторок 2 пара"],
      Wed: ["Середа 2 пара"],
      Thu: ["Четвер 2 пара"],
      Fri: ["П'ятниця 2 пара"],
      Sat: ["Субота 2 пара"]
    }
  },
  {
    pair: 3,
    courses: {
      Mon: ["Понеділок 3 пара"],
      Tue: ["Вівторок 3 пара"],
      Wed: ["Середа 3 пара"],
      Thu: ["Четвер 3 пара"],
      Fri: ["П'ятниця 3 пара"],
      Sat: ["Субота 3 пара"]
    }
  },
  {
    pair: 4,
    courses: {
      Mon: ["Понеділок 4 пара"],
      Tue: ["Вівторок 4 пара"],
      Wed: ["Середа 4 пара"],
      Thu: ["Четвер 4 пара"],
      Fri: ["П'ятниця 4 пара"],
      Sat: ["Субота 4 пара"]
    }
  },
  {
    pair: 5,
    courses: {
      Mon: ["Понеділок 5 пара"],
      Tue: ["Вівторок 5 пара"],
      Wed: ["Середа 5 пара"],
      Thu: ["Четвер 5 пара"],
      Fri: ["П'ятниця 5 пара"],
      Sat: ["Субота 5 пара"]
    }
  },
  {
    pair: 6,
    courses: {
      Mon: ["Понеділок 1 пара"],
      Tue: ["Вівторок 1 пара"],
      Wed: ["Середа 1 пара"],
      Thu: ["Четвер 1 пара"],
      Fri: ["П'ятниця 1 пара"],
      Sat: ["Субота 1 пара"]
    }
  },
  {
    pair: 7,
    courses: {
      Mon: ["Понеділок 1 пара"],
      Tue: ["Вівторок 1 пара"],
      Wed: ["Середа 1 пара"],
      Thu: ["Четвер 1 пара"],
      Fri: ["П'ятниця 1 пара"],
      Sat: ["Субота 1 пара"]
    }
  }
];

const store = new Store({
  state: {
    auth: true,
    user: user_hardcoded,
    role: Role.METODIST,
    currentState: CurrentState.SCHEDULES_ALL,
    faculties: [],
    speciality: [],
    subfaculty: [],
    breadcrumbs: breadcrumbs.ALL,
    days: [],
    pairs: [],
    levels: levels,
    schedule: schedule_hardcoded
  },
  getters: {
    role: state => state.role,
    currentState: state => state.currentState,
    logState: state => state.logState,
    user: state => state.user,
    breadcrumbs: state => state.breadcrumbs,
    days: state => state.days,
    pairs: state => state.pairs,
    schedule: state => state.schedule,
    faculties: state => state.faculties,
    subfaculty: state => state.subfaculty,
    speciality: state => state.speciality,
    levels: state => state.levels
  },
  actions: {
    changeCurrentState({ commit }, currentState) {
      commit("setCurrentState", currentState);
      switch (currentState) {
        case CurrentState.MAIN:
          commit("setBreadcrumbs", breadcrumbs.MAIN);
          break;
        case CurrentState.SCHEDULES_ALL:
          commit("setBreadcrumbs", breadcrumbs.ALL);
          break;
        case CurrentState.STUDENT_PROFILE:
          commit("setBreadcrumbs", breadcrumbs.PROFILE);
          break;
        case CurrentState.SCHEDULE_CREATE:
          commit("setBreadcrumbs", breadcrumbs.CREATE);
          break;
        case CurrentState.SCHEDULE_NEW:
          commit("setBreadcrumbs", breadcrumbs.CREATE);
          break;
        case CurrentState.SCHEDULE_VIEW:
          commit("setBreadcrumbs", breadcrumbs.VIEW);
          break;
        case CurrentState.SCHEDULE_EDIT:
          commit("setBreadcrumbs", breadcrumbs.EDIT);
          break;
        case CurrentState.AUTH:
          commit("setBreadcrumbs", breadcrumbs.AUTH);
          break;
        default:
          commit("setBreadcrumbs", breadcrumbs.MAIN);
      }
    },
    logout({ state, commit }) {
      commit("logout");
      if (
        state.currentState == CurrentState.STUDENT_PROFILE ||
        state.currentState == CurrentState.SCHEDULE_EDIT ||
        state.currentState == CurrentState.SCHEDULE_CREATE
      )
        commit("setCurrentState", CurrentState.MAIN);
    },
    login({ commit }, credentials) {
      console.log(credentials);
      axios
        .get("/api/user")
        .then(res => {
          commit("login", res.data);
          commit("setCurrentState", CurrentState.MAIN);
        })
        .catch(error => console.log(error));
    },
    fetchFaculties({ state, commit }) {
      if (state.faculties.length == 0)
        axios
          .get(`/api/faculty`)
          .then(res => {
            commit("setFaculties", res.data);
          })
          .catch(error => console.log(error));
    },
    fetchSubfaculties({ state, commit }) {
      if (state.subfaculty.length == 0)
        axios
          .get(`/api/subfaculty`)
          .then(res => {
            commit("setSubfaculties", res.data);
          })
          .catch(error => console.log(error));
    },
    fetchSpeciality({ state, commit }) {
      if (state.speciality.length == 0)
        axios
          .get(`/api/speciality`)
          .then(res => {
            commit("setSpeciality", res.data);
          })
          .catch(error => console.log(error));
    },
    fetchDays({ state, commit }) {
      if (state.days.length == 0)
        axios
          .get(`/api/days`)
          .then(res => {
            console.log(res.data);
            commit("setDays", res.data);
          })
          .catch(error => console.log(error));
    },
    fetchPairs({ state, commit }) {
      if (state.pairs.length == 0)
        axios
          .get(`/api/pairs`)
          .then(res => {
            console.log("Pairs" + res.data);
            commit("setPairs", res.data);
          })
          .catch(error => console.log(error));
    },
    fetchUserCourses({ state, commit }) {
      axios
        .get(`/api/user/` + state.user.code + `/courses`)
        .then(res => {
          commit("setUserData", res.data);
        })
        .catch(error => console.log(error));
    }
  },
  mutations: {
    setFaculties(state, data) {
      data.forEach(d => state.faculties.push(d));
    },
    setSubfaculties(state, data) {
      if (state.subfaculty.length == 0)
        data.forEach(d => state.subfaculty.push(d));
    },
    setSpeciality(state, data) {
      data.forEach(d => state.speciality.push(d));
    },
    setDays(state, data) {
      data.forEach(d => state.days.push(d));
    },
    setPairs(state, data) {
      data.forEach(d => state.pairs.push(d));
    },
    setCurrentState(state, currentState) {
      state.currentState = currentState;
    },
    setBreadcrumbs(state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs;
    },
    setUserData(state, data) {
      state.user.courses = data.course_data;
      state.user.schedule = data.course_schedule;
      console.log(state.user);
    },
    logout(state) {
      state.user = {};
      state.role = Role.GUEST;
    },
    login(state, data) {
      console.log(data);
      state.user = user_hardcoded;
      //TODO
      state.role = Role.METODIST;
    }
  }
});
export default store;
