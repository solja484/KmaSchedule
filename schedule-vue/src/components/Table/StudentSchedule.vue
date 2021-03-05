<template>
    <div class="mx-5">
        <table class="table table-bordered table-hover">
            <thead>
            <tr class="text-center table-header">
                <th style="width: 5%;">Час</th>
                <th v-for="day in days" :key="day.number" style="width: 16%;">{{day.name}}</th>
            </tr>
            </thead>
            <tbody class="nonbold">
            <tr v-for="pair in pairs" :key="pair">
                <th>{{pair}}</th>
                <th v-for="day in days" :key="day.number">{{day.name}}</th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: "StudentSchedule",
        data() {
            return {
                days: this.$store.getters['days'],
                pairs: this.$store.getters['pairs']
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/_variables.scss';

    .table-header th {
        border-color: $table-border;
        background: $table-th-fill;
    }

    .nonbold * {
        font-weight: normal!important;
    }
</style>