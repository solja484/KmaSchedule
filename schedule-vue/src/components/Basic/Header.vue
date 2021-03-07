<template>
  <b-navbar
    toggleable="md"
    type="dark"
    class="header px-5 text-14"
    v-if="state != authState"
  >
    <b-navbar-brand class=" align-bottom " href="#">
      <img
        src="../../assets/kma-logo-white.png"
        alt="kma logo"
        class="kma-brand"
      />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav v-if="userRole == guest">
          <b-nav-item href="/login" class="ml-4 white-item">Вхід</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-if="userRole != guest">
          <b-nav-item
            @click="redirectTo(schedulesState)"
            class="ml-4 white-item"
            :disabled="state == schedulesState"
            >Розклади</b-nav-item
          >
        </b-navbar-nav>
        <b-nav-item-dropdown right class="ml-4" v-if="userRole != guest">
          <template
            #button-content
            class="white-item"
            style="color:white!important;"
          >
            Профіль
          </template>
          <b-dropdown-item
            v-if="userRole == student"
            href=""
            @click="redirectTo(profileState)"
            class="text-14"
          >
            <b-icon
              icon="person-fill"
              aria-hidden="true"
              :disabled="state == profileState"
            ></b-icon>
            {{ user.name }}
          </b-dropdown-item>
          <b-dropdown-item @click="logout()" class="text-14"
            >Вихід</b-dropdown-item
          >
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
} from "bootstrap-vue";
import { Role } from "../../models/entities/Role";
import { CurrentState } from "../../models/entities/CurrentState";

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
      auth: this.$store.getters["auth"],
      state: this.$store.getters["currentState"],
      userRole: this.$store.getters["role"],
      user: this.$store.getters["user"],
      guest: Role.GUEST,
      student: Role.STUDENT,
      authState: CurrentState.AUTH,
      profileState: CurrentState.STUDENT_PROFILE,
      schedulesState: CurrentState.SCHEDULES_ALL
    };
  },
  methods: {
    logout: function() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/");
          this.$store.dispatch("changeCurrentState", CurrentState.MAIN);
        })
        .catch(err => console.log(err));
    },
    redirectTo: function(newState) {
      this.$store
        .dispatch("changeCurrentState", newState)
        .then(() => {
          if (newState == CurrentState.STUDENT_PROFILE)
            this.$router.push("/" + this.userRole + "/" + this.user.code);
          else this.$router.push("/schedules");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/_variables.scss";
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

.white-item {
  color: white !important;
}
</style>
