import Vue from "vue";
import Router from "vue-router";
import home from "./views/Home.vue";
import de from "./components/de.vue";
import zhi from "./components/zhi.vue";
import ti from "./components/ti.vue";
import mei from "./components/mei.vue";
import lao from "./components/lao.vue";
import about from "./views/About.vue";
import login from "./views/Login.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/home",
            name: "home",
            component: home,
        },
        {
            path: "/about",
            name: "about",
            component: about
        },
        {
            path: "/de",
            name: "de",
            component: de,
        },
        {
            path: "/zhi",
            name: "zh",
            component: zhi,
        },
        {
            path: "/ti",
            name: "ti",
            component: ti,
        },
        {
            path: "/mei",
            name: "mei",
            component: mei,
        },
        {
            path: "/lao",
            name: "lao",
            component: lao,
        },
        {
            path: "/login",
            name: "login",
            component: login,
        }
    ],
});
