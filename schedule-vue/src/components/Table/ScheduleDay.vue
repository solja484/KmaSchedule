<template>
    <tbody class="p-0">
    <tr class="p-0">
        <td :rowspan='rowspan_all' class="text-middle"><div class="rotate text-middle bold">{{day.name}}</div></td>
    </tr>
    <tr v-for="row in rows_all" :key="row.id" class="p-0">
        <td  v-if="row.rowspan" :rowspan="row.rowspan" class="px-0 py-2 text-center text-middle">{{row.time}}</td>
        <td class="py-2 bold">
            <span class="badge badge-secondary mr-1">{{row.course_code}}</span>
            {{row.name}}</td>
        <td class="py-2 italic">{{row.teacher}}</td>
        <td v-if="row.group!=0" class="px-0 py-2 text-center">{{row.group}}</td>
        <td v-else-if="row.lection==1" class="px-0 py-2 text-center">Лекція</td>
        <td v-else class="px-0 py-2 text-center"></td>
        <td class="px-0 py-2 text-center">{{row.weeks}}</td>
        <td v-if="row.classroom!=''" class="px-0 py-2 text-center">{{row.classroom}}</td>
        <td v-else class="px-0 py-2 text-center"></td>

    </tr>
    </tbody>
</template>

<script>
    export default {
        name: "ScheduleDay",
        props: ["day"],
        data(){
            return{
                pairs:this.$store.getters['pairs']
            }
        },
        computed: {
            courses: function () {
                return this.$store.getters['scheduleCourses'].filter(c => c.day_id == this.day.id);
            },
            rowspan_all: function () {
                let result = 1;
                for (let i = 0; i < 7; i++) result += this.rowspan_pair(i + 1);
                return result;
            },
            rows_all: function () {
                let result = [];

                for (let i = 1; i < 8; i++) {
                    let counter = 0;
                    for (let course of this.courses) {
                        if (course.pair_id == i) {
                            counter++;
                            if(counter==1)
                                course.rowspan=this.rowspan_pair(i);
                            course.time=this.pairs.find(p=>p.number==i).time;
                            result.push(course);
                        }
                    }

                    if (counter == 0) {
                        let new_empty={
                            "id": i,
                            "course_code": "",
                            "group": 0,
                            "day_id": "",
                            "pair_id": i,
                            "lection": 0,
                            "weeks": "",
                            "classroom": "",
                            "name": "",
                            "teacher": "",
                            "rowspan":"1"
                        };
                        console.log("PAIR "+i);
                        new_empty.time=this.pairs.find(p=>p.number==i).time;
                        result.push(new_empty);
                    }
                }
                console.log(result);
                return result;
            }
        }, methods: {
            rowspan_pair(pair_id) {
                let rowspan = 0;
                this.courses.forEach(function (c) {
                    if (c.pair_id == pair_id)
                        rowspan++;
                });
                if (rowspan == 0) return 1;
                return rowspan;
            }
        }

    }
</script>

<style scoped>
    .text-middle{
        text-align: center;
        vertical-align: middle!important;
    }

.rotate{
    transform: rotate(270deg);
    text-align: center;

}

    .italic{
        font-style: italic;
    }

    .bold{
        font-weight: bold;
    }
</style>