<template>
    <div>
        <button :v-if="userRole==methodistRole"
                @click="newSchedule()"
                class="btn btn-light mx-5 add-schedule-button">
            <b-icon-plus class="bigger"></b-icon-plus>
            Додати розклад
        </button>
        <Title message="Розклади за спеціальністю" additional="" ></Title>
        <ScheduleBlock :type="speciality"></ScheduleBlock>
        <Title message="Розклади за кафедрами" additional=""></Title>
        <ScheduleBlock :type="sub_faculty"></ScheduleBlock>
        <Title message="Розклади сесії" additional=""></Title>
        <ScheduleBlock :type="session"></ScheduleBlock>
    </div>
</template>

<script>
    import Title from "../Nested/Title";
    import ScheduleBlock from "../Nested/ScheduleBlock";
    import {ScheduleType} from "../../models/entities/ScheduleType";
    import {CurrentState} from "../../models/entities/CurrentState";
    import {Role} from "../../models/entities/Role";
    import { BIconPlus } from "bootstrap-vue";

    export default {
        name: "SchedulesList",
        components: { Title, ScheduleBlock, BIconPlus },
        data(){
            return{
                speciality:ScheduleType.SPECIALITY,
                sub_faculty:ScheduleType.SUBFACULTY,
                session:ScheduleType.SESSION,
                userRole:this.$store.getters['userRole'],
                methodistRole:Role.METHODIST
            }
        },
        mounted(){
            this.$store.dispatch("fetchFinalSchedules");
        },
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
