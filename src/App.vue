<template>
    <v-app
            id="inspire"
            class="red lighten-5"
    >
        <v-navigation-drawer
                v-model="drawer"
                fixed
                clipped
                app
                class="red"
        >
            <v-list dense>
                <v-list-tile router v-for="item in items" :key="item.text" :to="item.to" :target="item.to">
                    <v-list-tile-action>
                        <v-icon style="color:yellow">{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title v-text="item.text" style="color:yellow"></v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                color="red darken-4"
                dense
                fixed
                clipped-left
                app
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer" style="color:yellow">
            </v-toolbar-side-icon>
            <v-toolbar-title class="mr-5 align-center">
                <span class="title" style="color:yellow">
                    {{URL_CHINESE_MAP.get($router.currentRoute.path)}}
                </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="subheading" style="color:yellow">
                {{studentName}}
            </span>
            <v-btn class="yellow lighten-1" :to="login.to" v-if="!ifLogin" small>
                {{login.text}}
            </v-btn>
            <v-btn class="yellow lighten-1" v-else @click='logout' small>
                注销
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fill-height>
                <v-flex>
                    <router-view></router-view>
                </v-flex>
            </v-container>
        </v-content>
        <v-footer app class="red darken-4">
            <span>&copy; shuosc</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        computed: {
            ifLogin() {
                return this.$store.state.student.ifLogin
            },
            studentName() {
                return this.$store.state.student.studentName
            }
        },
        data: () => ({
            login: {text: "登录", to: "/login"},
            drawer: null,
            items: [
                {icon: "trending_up", text: "德", to: "de"},
                {icon: "subscriptions", text: "智", to: "zhi"},
                {icon: "history", text: "体", to: "ti"},
                {icon: "featured_play_list", text: "美", to: "mei"},
                {icon: "watch_later", text: "劳", to: "lao"},
                {icon: "watch_later", text: "我的活动", to: "about"},
            ],
            URL_CHINESE_MAP: new Map([
                ["/about", "我的活动"],
                ["/de", "德"],
                ["/zhi", "智"],
                ["/ti", "体"],
                ["/mei", "美"],
                ["/lao", "劳"],
                ["/login", "登录"],
                ["/home", "首页"]
            ]),
        }),
        props: {
            source: String
        },
        methods: {
            logout() {
                return this.$store.commit('logout')
            }
        }
    }
</script>
