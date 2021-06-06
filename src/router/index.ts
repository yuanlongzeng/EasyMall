import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
import HelloWold from "@c/HelloWorld.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWold,
    },
    {
        path: "/hello/:name",
        name: "About",
        component: () => import("@c/About.vue"),
    },
    {
        path: "/user/register",
        name: "Register",
        component: () => import("views/user/Register.vue"),
    },
    {
        path: "/user/login",
        name: "Login",
        redirect: '/'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
