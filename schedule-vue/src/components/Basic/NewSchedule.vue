<template>
    <div>
        <Title message="Додати розклад"></Title>
        <div class="mx-5 ">
            <form class="w-50 px-3 form-center">

                <label for="new-schedule-type" class="text-16">Створити розклад:</label>
                <b-form-select id='new-schedule-type' v-model="selected" size="md" class="mb-3" variant="secondary">
                    <template #first>
                        <b-form-select-option :value="null" disabled>Не обрано</b-form-select-option>
                    </template>
                    <b-form-select-option
                            v-for="type in schedule_types"
                            :key="type.value"
                            :value="type.value"
                            class="py-3">
                        {{type.title}}
                    </b-form-select-option>
                </b-form-select>
                <button class='btn btn-secondary' type="button" @click="createNewSchedule"> Створити</button>

                <p class="text-16 mt-3"> Або </p>

                <label for="new-schedule-code" class="text-16">Додати існуючий:</label>
                <input class="form-control mb-3" v-model="code" type="text" id="new-schedule-code"
                       placeholder="Введіть код"/>
                <div class="invalid-feedback">
                    Please provide a valid zip.
                </div>
                <button class='btn btn-secondary' type="button" @click="addByCode"> Додати</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Title from "../Nested/Title";
    import {CurrentState} from "../../models/entities/CurrentState.js"
    import {BFormSelect, BFormSelectOption} from 'bootstrap-vue'

    export default {
        name: "NewSchedule",
        components: {Title, BFormSelect, BFormSelectOption},
        data() {
            return {
                schedule_types: [
                    {
                        "title": "Розклад за спеціальністю",
                        "value": "speciality"
                    },
                    {
                        "title": "Розклад сесії",
                        "value": "session"
                    }, {
                        "title": "Довільний розклад",
                        "value": "subfaculty"
                    }],
                selected: null,
                code: null
            }
        },
        methods: {
            createNewSchedule: function () {
                if (this.selected == null)
                    document.getElementById("new-schedule-type").classList.add('invalid');
                else {
                    document.getElementById("new-schedule-type").classList.remove('invalid');
                    this.$store.dispatch('changeCurrentState', CurrentState.SCHEDULE_CREATE).then(() => {
                        this.$store.dispatch('setCreateType', this.selected).then(() => {
                            this.$router.push('/schedules/create');
                        })
                    }).catch(err => console.log(err));
                }
            },
            addByCode: function () {
                if (this.code == null || this.code == "")
                    document.getElementById("new-schedule-code").classList.add('invalid');
                else {

                    document.getElementById("new-schedule-code").classList.remove('invalid');
                    //TODO ADD SCHEDULE TO LIST, then
                    this.$router.push('/schedules');

                }
            }
        }
    }
</script>

<style scoped>
    .text-16 {
        font-size: 16px;
    }

    .form-center {
        margin-left: 25%;
    }

    .invalid {
        border-color: crimson;
    }
</style>