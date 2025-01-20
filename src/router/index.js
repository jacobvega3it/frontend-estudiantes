import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import StudentsListView from "@/views/StudentsListView.vue";
import StudentDetailView from "@/views/StudentDetailView.vue";

const routes = [
    { path: "/home", name: "Home", component: HomeView },
    { path: "/about", name: "About", component: AboutView },
    { path: "/students", name: "Students", component: StudentsListView },
    { path: "/students/:id", name: "StudentDetail", component: StudentDetailView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;