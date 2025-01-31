import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import StudentsListView from "@/views/StudentsListView.vue";
import StudentDetailView from "@/views/StudentDetailView.vue";
import LoginView from "@/views/LoginView.vue";
import CerrarSesion from "@/components/CerrarSesion.vue";
import StudentsAddView from "@/views/StudentsAddView.vue";

const routes = [
    { path: "/", name: "Login", component: LoginView },
    { path: "/home", name: "Home", component: HomeView, meta: { requiresAuth: true } },
    { path: "/about", name: "About", component: AboutView, meta: { requiresAuth: true } },
    { path: "/students", name: "Students", component: StudentsListView, meta: { requiresAuth: true } },
    { path: "/add", name: "Add", component: StudentsAddView, meta: { requiresAuth: true } },
    { path: "/students/:id", name: "StudentDetail", component: StudentDetailView, meta: { requiresAuth: true } },
    { path: "/close", name: "Close", component: CerrarSesion },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('jwt');
  
    if (to.meta.requiresAuth && !token) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;