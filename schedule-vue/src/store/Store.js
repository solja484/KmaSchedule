import Vue from 'vue'
import Vuex, {Store} from "vuex";
//import axios from "vue-axios";
import {CurrentState} from "../models/entities/CurrentState";
import {Role} from "../models/entities/Role";

Vue.use(Vuex);

let user_hardcoded = {
    "code": "204186",
    "name": "Андрусів Соломія Ігорівна",
    "role": "Студент",
};

let breadcrumbs_hardcoded = [
    {
        text: 'Головна',
        href: '/'
    },
    {
        text: 'Особистий кабінет',
        active: true
    }
];

let days_hardcoded = [
    {"number": 1, "name": 'Понеділок'},
    {"number": 2, "name":'Вівторок'},
    {"number": 3, "name":'Середа'},
    {"number": 4, "name":'Четвер'},
    {"number": 5, "name":'П\'ятниця'},
    {"number": 6, "name":'Субота'}];
let pairs_hardcoded = [{"number": 1, "time":'08:30-09:50'},
    {"number": 1, "time":'10:00-11:20'},
    {"number": 1, "time":'11:40-13:00'},
    {"number": 1, "time":'13:30-14:50'},
    {"number": 1, "time":'15:00-16:20'},
    {"number": 1, "time":'16:30-17:50'},
    {"number": 1, "time":'18:00-19:20'}];

const store = new Store({
    state: {
        auth: true,
        user: user_hardcoded,
        role: Role.STUDENT,
        currentState: CurrentState.STUDENT_PROFILE,
        faculties: [],
        breadcrumbs: breadcrumbs_hardcoded,
        days: days_hardcoded,
        pairs: pairs_hardcoded
    },
    getters: {
        role: state => state.role,
        currentState: state => state.currentState,
        logState: state => state.logState,
        faculties: state => state.faculties,
        user: state => state.user,
        breadcrumbs: state => state.breadcrumbs,
        days: state => state.days,
        pairs: state => state.pairs
    },
    actions: {
        changeCurrentState({commit}, currentState) {
            commit("setCurrentState", currentState);
        },
        logout({commit}) {
            commit("logout");
        },
        login({commit}, credentials) {
            commit("login", credentials);
        }
        /*   async fetchFaculties({commit}) {

               const response = await fetch(`/api/faculty`, {
                   method: 'GET',
                   headers: {'Content-Type': 'application/json'}
               });
               console.log("VICTORY! " + response.json());
               commit('fetchFaculties', response.json());


               axios.get(`/api/faculty`)
                   .then(data => {
                       commit('fetchFaculties', data);
                       console.log("VICTORY! " + data)
                   })


        }*/
    },
    mutations: {
        fetchFaculties(state, data) {
            data.forEach(d => state.faculties.push(d))
        },
        setCurrentState(state, currentPage) {
            state.currentState = currentPage;
        },
        logout(state) {
            state.user = {};
            state.role = Role.GUEST;
            state.currentState = CurrentState.AUTH;
        },
        login(state, credentials) {
            //axios.get('/api/login', credentials).then((results)=>{})
            console.log(credentials.email);
            state.user = user_hardcoded;
            state.role = Role.STUDENT;
            state.currentState = CurrentState.STUDENT_PROFILE;
        }
    }
});
export default store;

