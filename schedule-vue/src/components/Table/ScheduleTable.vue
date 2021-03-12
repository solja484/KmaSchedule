<template>
    <table class="table table-bordered table-hover table-align">
        <thead>
        <tr class="text-center table-header">
            <th style="width: 2%;">День</th>
            <th style="width: 7%;">Час</th>
            <th style="width: 45%;">Дисципліна</th>
            <th >Викладач</th>
            <th style="width: 7%;">Група</th>
            <th style="width: 7%;">Тижні</th>
            <th style="width: 7%;">Аудиторія</th>
        </tr>
        </thead>

        <ScheduleDay v-for="day in days" :key="day.number" :day="day"></ScheduleDay>
        <!--ScheduleDay :day="days[0]"></ScheduleDay-->

    </table>
</template>

<script>
    import ScheduleDay from "./ScheduleDay";
    export default {
        name: "ScheduleTable",
        components: {ScheduleDay},
        data(){
            return{
                days:this.$store.getters['days']
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
