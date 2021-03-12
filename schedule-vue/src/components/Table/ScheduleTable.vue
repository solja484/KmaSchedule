<template>
    <table class="table table-bordered table-hover table-align">
        <thead>
        <tr class="text-center table-header">
            <th style="width: 2%;">День</th>
            <th style="width: 7%;">Час</th>
            <th style="width: 40%;">Дисципліна</th>
            <th >Викладач</th>
            <th style="width: 10%;" v-if="schedule_type==session_type">Вид контролю</th>
            <th style="width: 7%;">Група</th>
            <th style="width: 7%;" v-if="schedule_type!=session_type">Тижні</th>
            <th v-else style="width: 7%;">Дата</th>
            <th style="width: 7%;">Аудиторія</th>
        </tr>
        </thead>
        <ScheduleDay v-for="day in days" :key="day.number" :day="day" :schedule_type="schedule_type"></ScheduleDay>
    </table>
</template>

<script>
    import ScheduleDay from "./ScheduleDay";
    import {ScheduleType} from "../../models/entities/ScheduleType";

    export default {
        name: "ScheduleTable",
        components: {ScheduleDay},
        props:["schedule_type"],
        data(){
            return{
                days:this.$store.getters['days'],
                session_type: ScheduleType.SESSION
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/_variables.scss";

    .table-header th {
        border-color: $gray-border;
        background: $gray-fill;
    }


</style>
