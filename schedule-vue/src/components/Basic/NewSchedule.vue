<template>
    <div>
        <Title message="Додати розклад"></Title>
        <div class="mx-5 ">
            <form class="w-50 px-3 form-center">
                <label for="new-schedule-type" class="text-16">Створити розклад:</label>
                <b-form-select
                        id="new-schedule-type"
                        v-model="selected"
                        size="md"
                        class="mb-3"
                        variant="secondary">
                    <template #first>
                        <b-form-select-option :value="null" disabled
                        >Не обрано
                        </b-form-select-option>
                    </template>
                    <b-form-select-option
                            v-for="type in schedule_types"
                            :key="type.value"
                            :value="type.value"
                            class="py-3">
                        {{ type.title }}
                    </b-form-select-option>
                </b-form-select>
                <button
                        class="btn btn-secondary"
                        type="button"
                        @click="createNewSchedule"
                        :disabled="selected==null">
                    Створити
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import Title from "../Nested/Title";
    import {CurrentState} from "../../models/entities/CurrentState.js";
    import {BFormSelect, BFormSelectOption} from "bootstrap-vue";

    export default {
        name: "NewSchedule",
        components: {Title, BFormSelect, BFormSelectOption},
        data() {
            return {
                schedule_types: this.$store.getters['university'].schedule_types,
                selected: null,
                code: null
            };
        },
        methods: {
            createNewSchedule: function () {
                if (this.selected == null)
                    document.getElementById("new-schedule-type").classList.add("invalid");
                else {
                    document
                        .getElementById("new-schedule-type")
                        .classList.remove("invalid");
                    this.$store
                        .dispatch("changeCurrentState", CurrentState.SCHEDULE_CREATE)
                        .then(() => {
                            this.$store.dispatch("setCreateType", this.selected).then(() => {
                                this.$router.push("/schedules/create");
                            });
                        })
                        .catch(err => console.log(err));
                }
            }

        }

    };
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
