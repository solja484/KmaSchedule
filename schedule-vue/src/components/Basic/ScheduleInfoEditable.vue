<template>
    <div>
        <button @click="saveSchedule" class="btn btn-info btn-lg float-right mx-5 info-button"
                :disabled="selected_speciality==null"><i class="fa fa-save"></i> Зберегти
        </button>
        <Title v-if="currentState=createState" message="Новий розклад"></Title>
        <Title v-else-if="currentState=editState" message="Редагування розкладу" additional=""></Title>
        <div class="container mx-5">
            <div class="row">
                <strong class="col-sm-2 text-right text-14">Факультет</strong>
                <b-form-select v-model="selected_faculty" class="col-sm-4 text-14 mb-1" size="sm" disabled>
                    <b-form-select-option :value="methodist.faculty_id">{{methodist.faculty_name}}
                    </b-form-select-option>
                </b-form-select>
            </div>

            <div class="row">
                <strong class="col-sm-2 text-right text-14">Програма</strong>
                <b-form-group class="col-sm-4 text-14 mb-1" v-slot="{ ariaDescribedby }">
                    <b-form-radio-group
                            v-model="selected_level"
                            :options="level_options"
                            :aria-describedby="ariaDescribedby"
                    ></b-form-radio-group>
                </b-form-group>
            </div>
            <div class="row " v-if="schedule_type!=sub_faculty_type">
                <strong class="col-sm-2 text-right text-14">Спеціальність</strong>
                <b-form-select v-model="selected_speciality" class="col-sm-4 text-14 mb-1" size="sm">
                    <b-form-select-option :value="null">Не обрано</b-form-select-option>
                    <b-form-select-option v-for="s in specialityFiltered" :key="s.id" :value="s.id" class="text-14">
                        {{s.name}}
                    </b-form-select-option>
                </b-form-select>
                <div class=" col-sm-6"></div>
            </div>
            <div class="row " v-else-if="schedule_type==sub_faculty_type">
                <strong class="col-sm-2 text-right text-14">Кафедра</strong>
                <b-form-select v-model="selected_sub_faculty" class="col-sm-4 text-14 mb-1" size="sm">
                    <b-form-select-option :value="null">Не обрано</b-form-select-option>
                    <b-form-select-option v-for="s in subfacultyFiltered" :key="s.id" :value="s.id" class="text-14">
                        {{s.name}}
                    </b-form-select-option>
                </b-form-select>
                <div class=" col-sm-6"></div>
            </div>
            <div class="row" v-if="schedule_type!=sub_faculty_type">
                <strong class="col-sm-2 text-right text-14"  >Рік навчання</strong>
                <b-form-select v-model="selected_study_year" class="col-sm-1 text-14 mb-1" size="sm"
                               :disabled="selected_speciality==null">
                    <b-form-select-option v-for="l in yearsByLevel" :key="l.course" :value="l.year" class="text-14">
                        {{l.year}}
                    </b-form-select-option>
                </b-form-select>
            </div>
            <div class="row vertical-middle">
                <strong class="col-sm-2 text-right text-14 vertical-middle">Триместр</strong>
                <b-form-select v-model="selected_season" class="col-sm-1 text-14 mb-1" size="sm">
                    <b-form-select-option v-for="s in university.seasons" :key="s.number" :value="s.number"
                                          class="text-14">
                        {{s.title}}
                    </b-form-select-option>
                </b-form-select>
            </div>
            <div class="row ">
                <strong class="col-sm-2 text-right text-14">Рік</strong>
                <b-form-select v-model="selected_academic_year" class="col-sm-1 text-14 mb-1" size="sm">
                    <b-form-select-option :value="university.academic_year" class="text-14">
                        {{university.academic_year}}
                    </b-form-select-option>
                    <b-form-select-option :value="next_academic_year" class="text-14">
                        {{next_academic_year}}
                    </b-form-select-option>
                </b-form-select>
            </div>
            <div class="row mt-2">
                <strong class="col-sm-2 text-right text-14">Додатково</strong>
                <b-form-input class="col-sm-4 t text-14" maxlength="100"></b-form-input>
            </div>
        </div>
        <EmptySchedule></EmptySchedule>
    </div>
</template>

<script>
    import Title from "../../components/Nested/Title";
    import {CurrentState} from "../../models/entities/CurrentState";
    import {ScheduleType} from "../../models/entities/ScheduleType"
    import {BFormSelect, BFormSelectOption, BFormGroup, BFormRadioGroup, BFormInput} from "bootstrap-vue";
    import EmptySchedule from "../Table/EmptySchedule";

    export default {
        name: "ScheduleInfoEdit",
        components: {EmptySchedule, Title, BFormSelect, BFormSelectOption, BFormGroup, BFormRadioGroup, BFormInput},
        data() {
            return {
                currentState: this.$store.getters['currentState'],
                createState: CurrentState.SCHEDULE_CREATE,
                editState: CurrentState.SCHEDULE_EDIT,
                university: this.$store.getters['university'],
                methodist: this.$store.getters['user'].methodist,
                sub_faculty: [],
                speciality: [],
                level_options: [
                    {text: 'Бакалаврська', value: 1},
                    {text: 'Магістерська', value: 2}
                ],
                yearsByLevel: this.$store.getters['university'].levels.filter(l => l.level == 1),
                selected_faculty: this.$store.getters['user'].methodist.faculty_id,
                selected_speciality: this.$store.getters['editingSchedule'].selected_speciality,
                selected_sub_faculty: this.$store.getters['editingSchedule'].selected_sub_faculty,
                selected_study_year: this.$store.getters['editingSchedule'].selected_study_year,
                selected_season: this.$store.getters['editingSchedule'].selected_season,
                selected_academic_year: this.$store.getters['editingSchedule'].selected_academic_year,
                notes: this.$store.getters['editingSchedule'].notes,
                selected_level: this.$store.getters['editingSchedule'].selected_level,
                schedule_type: this.$store.getters['editingSchedule'].schedule_type,
                sub_faculty_type: ScheduleType.SUBFACULTY
            }
        },
        computed: {
            next_academic_year: function () {
                return this.university.academic_year + 1
            },
            subfacultyFiltered: function () {
                if (this.schedule_type == this.sub_faculty_type)
                    return this.university.sub_faculty.filter(s =>
                        (s.faculty_id == this.selected_faculty));
                return [];
            },
            specialityFiltered: function () {
                if (this.schedule_type != this.sub_faculty_type)
                    return this.university.speciality.filter(s =>
                        (s.faculty_id == this.selected_faculty && s.level == this.selected_level));
                return [];
            }
        },
        watch: {
            selected_level: function () {
                this.specialityFiltered;
                this.yearsByLevel = this.$store.getters['levels'].filter(l => l.level == this.selected_level);
                this.selected_speciality = null;
                this.selected_sub_faculty = null;

            }
        },
        methods: {
            saveSchedule: function () {
                console.log("CREATE TYPE" + this.schedule_type);
                const data = {
                    "selected_faculty": this.selected_faculty,
                    "selected_speciality": this.selected_speciality,
                    "selected_sub_faculty": this.selected_sub_faculty,
                    "selected_level": this.selected_level,
                    "selected_study_year": this.selected_study_year,
                    "selected_season": this.selected_season,
                    "selected_academic_year": this.selected_academic_year,
                    "notes": this.notes,
                    "schedule_type": this.schedule_type
                };
                console.log(data);
                this.$store.dispatch('editSchedule', data).then((res) => {
                    this.$router.push('/view/' + res.code);
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/scss/_variables.scss";

    .text-14 {
        font-size: 14px;
    }
    .vertical-middle{
        vertical-align: middle!important;
    }

    .info-button {
        background: $info !important;
        border-color: $info-border !important;
    }
</style>