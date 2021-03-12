import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/schedules",
    name: "Schedules",
    component: () => import("../views/Schedules.vue")
  },
  {
    path: "/schedules/create",
    name: "Create schedule",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Create.vue")
  },
  {
    path: "/schedules/new",
    name: "New",
    component: () => import("../views/New.vue")
  },
  {
    path: "/schedules/edit/:code",
    name: "Edit",
    component: () => import("../views/Edit.vue")
  },
  {
    path: "/schedules/view/:code",
    name: "ViewPage",
    component: () => import("../views/View.vue")
  },
  {
    path: "/student/:code",
    name: "Student schedule",
    component: () => import("../views/Profile.vue")
  },{
    path: "/methodist/:code",
    name: "Methodist schedule",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Auth.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
