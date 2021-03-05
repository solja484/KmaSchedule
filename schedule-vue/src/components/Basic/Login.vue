<template>
    <div class="blue">
        <b-card class=" border-sharp">
            <b-form class="container-fluid ">
                <b-form-group
                        label="Логін:"
                        label-for="login-email">
                    <b-form-input
                            v-model="form.login"
                            id="login-email"
                            type="email"
                            placeholder="Enter email"
                            required
                    ></b-form-input>
                </b-form-group>

                <b-form-group label="Пароль:" label-for="login-password">
                    <b-form-input
                            v-model="form.password"
                            id="login-password"
                            type="password"
                            required
                    ></b-form-input>
                </b-form-group>

                <b-button class="px-5" @click="loginF">Вхід</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
    import {BForm, BFormGroup, BFormInput, BCard, BButton} from 'bootstrap-vue'
    import {CurrentState} from "../../models/entities/CurrentState";

    export default {
        name: "Login",
        components: {BForm, BFormGroup, BFormInput, BCard, BButton},
        methods: {
            loginF: function () {
                this.$store.dispatch('login', this.form)
                    .then(() => {
                        let user = this.$store.getters['user'];
                        let userRole = this.$store.getters['role'];
                        this.$router.push('/' + userRole + '/' + user.code);
                        this.$store.dispatch('changeCurrentState', CurrentState.STUDENT_PROFILE);
                    })
                    .catch(err => console.log(err))
            },
        },
        data() {
            return {
                form: {
                    login: 'SolomiaAndrusiv',
                    password: '$2y$13$vk1bJDGFTA2PUZw.fAKjK.BV80fh5ToCWI4tU98HhFdatq76o2orK'
                }
            }
        }
    }
</script>

<style scoped>
    .blue {
        background: #6699CC;
        min-height: 100vh;
        width: 100%;
        padding: 10% 25%;
    }

    .border-sharp {
        border-radius: 0;
    }
</style>