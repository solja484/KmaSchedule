import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Schedules",
    component: Main
  },
  {
    path: "/create",
    name: "Create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Create.vue")
  },
  {
    path: "/edit/:code",
    name: "Edit schedule",
    component: () =>
        import( "../views/Edit.vue")
  },
  {
    path: "/view/:code",
    name: "View schedule",
    component: () =>
        import( "../views/View.vue")
  },
  {
    path: "/student/:code",
    name: "Student schedule",
    component: () =>
        import( "../views/Student.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
        import( "../views/Auth.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
