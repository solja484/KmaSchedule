<template>

    <b-navbar toggleable="md" type="dark" class="header px-5 text-14" v-if="state!=authState">
        <b-navbar-brand class=" align-bottom " href="#">
            <img src="../../assets/kma-logo-white.png" alt="kma logo" class="kma-brand"/>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" v-if="userRole!=guest">
                <b-navbar-nav>
                    <b-nav-item href="/" class="mx-4 white-item">Розклади</b-nav-item>
                </b-navbar-nav>
                <b-nav-item-dropdown right >
                    <template #button-content class="mx-4 white-item">
                        Профіль
                    </template>
                    <b-dropdown-item href="" @click="redirectTo(profileState)" class="text-14">
                        <b-icon icon="person-fill" aria-hidden="true" :disabled="state==profileState"></b-icon>
                        {{user.name}}
                    </b-dropdown-item>
                    <b-dropdown-item @click="logout()" class="text-14">Вихід</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

</template>

<script>
    import {
        BNavbar,
        BNavbarNav,
        BNavbarBrand,
        BNavbarToggle,
        BCollapse,
        BNavItemDropdown,
        BNavItem,
        BDropdownItem,
        BIcon
    } from 'bootstrap-vue'
    import {Role} from "../../models/entities/Role";
    import {CurrentState} from "../../models/entities/CurrentState";

    export default {
        name: "Header",
        components: {
            BNavbar,
            BNavbarNav,
            BNavbarBrand,
            BNavbarToggle,
            BCollapse,
            BNavItemDropdown,
            BNavItem,
            BDropdownItem,
            BIcon
        },
        data() {
            return {
                auth: this.$store.getters['auth'],
                state: this.$store.getters['currentState'],
                userRole: this.$store.getters['role'],
                user:this.$store.getters['user'],
                guest: Role.GUEST,
                authState: CurrentState.AUTH,
                profileState:CurrentState.STUDENT_PROFILE
            }
        },methods:{
            logout: function () {
                this.$store.dispatch('logout')
                    .then(()=> {
                        this.$router.push('/login');
                        this.$store.dispatch('changeCurrentState', CurrentState.AUTH);

                    })
                    .catch(err => console.log(err))
            },
            redirectTo:function(newState){
                this.$store.dispatch('changeCurrentState', newState) .then(()=> {
                    this.$router.push('/'+this.userRole+'/'+this.user.code);
                })
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/_variables.scss';
    .bold {
        font-weight: 600;
    }

    .header {
        background: $header-background;
        border-color: $header-border;
    }

    .kma-brand {
        height: 30px;
    }

    .text-14 {
        font-size: 14px;
    }

    .white-item{
        color:white!important;
    }

</style>