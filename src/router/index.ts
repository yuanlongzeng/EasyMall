import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
import HelloWold from "../components/HelloWorld.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWold,
    },
    {
        path: "/hello/:name",
        name: "About",
        component: () => import("../components/About.vue"),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
