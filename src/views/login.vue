<template>
    <v-card class="elevation-8">
        <v-card-text>
            <v-form>
                <v-text-field v-model="username" prepend-icon="person" name="username" label="一卡通账号"
                              @keyup.enter="login" type="text"></v-text-field>
                <v-text-field v-model="password" prepend-icon="lock" name="password" label="密码"
                              @keyup.enter="login" type="password"></v-text-field>
            </v-form>
            <v-dialog v-model="errorLogin" width="500">
                <v-card>
                    <v-card-text>
                        学号或密码错误，请重试
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn @click="errorLogin = false " color="primary" block>
                            确定
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card-text>
        <v-card-actions>
            <v-btn :loading="loading" :disabled="loading" @click="login" block color="primary">登录</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component
    export default class Login extends Vue {
        private username = "";
        private password = "";
        public studentName: string = "";
        loading = false;
        errorLogin = false;
        public login() {
            this.loading = true;
            (async () => {
                const response = await this.axios.post("http://localhost:8000/login", {
                    Username: this.username,
                    Password: this.password
                }).then(res=>{
                    console.log(res.data)
                    if (res.data.student_name) {
                        this.$store.commit ('login' , {
                            username: this.username,
                            studentName : res.data.student_name,
                            token: res.data.token
                        })
                        this.$router.push("./");
                    } else {
                        this.errorLogin = true
                    }
                    this.loading = false;
                })
                this.axios.defaults.headers.Authorization = "Bearer " + localStorage.token;
            })();
        }

    };
</script>

<style scoped>

</style>
