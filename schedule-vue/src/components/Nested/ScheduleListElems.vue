<template>
    <div>
        <ScheduleListELem v-for="s in schedulesFiltered" :key="s.code" :code="s.code" :title="s.title"></ScheduleListELem>
    </div>
</template>

<script>
    import {ScheduleType} from "../../models/entities/ScheduleType";
    import ScheduleListELem from "../Nested/ScheduleListELem";
    export default {
        name: "ScheduleListElems",
        components:{ScheduleListELem},
        props:['type','faculty','sub_faculty','level'],
        data(){
            return {
                schedules:this.$store.getters['finalSchedules'],
                subFacultyType:ScheduleType.SUBFACULTY
            }
        },
        computed:{
            schedulesFiltered: function(){
                if(this.type==this.subFacultyType)
                    return this.schedules.filter(s=>s.schedule_type==this.type && s.faculty_id==this.faculty && this.sub_faculty==s.subfaculty_id);
                else
                return this.schedules.filter(s=>s.schedule_type==this.type && s.faculty_id==this.faculty && this.level==s.study_year)
            }
        }
    }
</script>

<style scoped>

</style>