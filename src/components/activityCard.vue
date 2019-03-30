<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card hover min-height color="red darken-2">
                    <v-card-title>
                        <span class="caption" style="color:yellow">{{item.title}}</span>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-icon small color="white">people</v-icon>
                        <span class="caption" style="color:yellow">{{item.leader}}</span>
                        <v-icon small color="white">location_on</v-icon>
                        <span class="caption" style="color:yellow">{{item.address}}</span>
                    </v-card-text>
                    <v-card-actions>
                        <v-flex>
                            <v-icon small color="white">timer</v-icon>
                            <span class="caption"
                                  style="color:yellow">报名时间: {{format(item.sign_up_time,'yyyy年MM月dd日')}}</span>
                        </v-flex>
                    </v-card-actions>
                    <v-card-actions>
                        <v-flex>
                            <v-icon small color="white">access_time</v-icon>
                            <span class="caption"
                                  style="color:yellow">开始时间: {{format(item.start_time,'yyyy年MM月dd日')}}</span>
                        </v-flex>
                    </v-card-actions>
                    <v-card-actions>
                        <v-flex>
                            <v-icon small color="white">timer</v-icon>
                            <span class="caption"
                                  style="color:yellow">结束时间: {{format(item.end_time,'yyyy年MM月dd日')}}</span>
                        </v-flex>
                    </v-card-actions>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-flex offset-xs4 xs4>
                            <v-btn @click="isSignUp=true" flat small color="yellow">报名</v-btn>
                        </v-flex>
                    </v-card-actions>
                    <v-dialog v-model="isSignUp" v-if="this.$store.state.student.studentName">
                        <v-card>
                            <v-card-text>
                                <v-form>
                                    <v-text-field @keyup.enter="signUp" label="手机号" name="shouJhm" prepend-icon="phone"
                                                  type="text" v-model="phoneNumber"></v-text-field>
                                    <v-text-field @keyup.enter="signUp" label="邮箱" name="email" prepend-icon="email"
                                                  type="text" v-model="email"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn :loading="loading" @click="signUp" block color="primary">确认报名</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="isSignUp" v-else>
                        <v-card>
                            <v-card-text>
                                请登录后再报名
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn @click="isSignUp = false " color="primary" block>
                                    确定
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="continueSignUp" v-if="isSuccessSignUp">
                        <v-card>
                            <v-card-text>
                                报名成功
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn @click="continueSignUp = false " color="primary" block>
                                    确定
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="continueSignUp" v-else>
                        <v-card>
                            <v-card-text>
                                报名失败,请重试
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn @click="continueSignUp = false" color="primary" block>
                                    确定
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import {Vue} from "vue-property-decorator";
    import format from "date-fns/format"

    @Component({
        props: {
            item: Object
        },
        methods: {
            format
        }
    })
    export default class ActivityCard extends Vue {
        private isSignUp = false;
        private continueSignUp = false;
        private isSuccessSignUp = false;
        private phoneNumber = '';
        private email = '';
        private loading = false;

        private async signUp() {
            this.loading = true;
            const response = await this.axios.post('engage', {
                    activity_id: (this as any).item.id,
                    phone_number: this.phoneNumber,
                    mail_address: this.email,
                }
            ).then((res) => {
                if (res.status === 200) {
                    this.isSuccessSignUp = true;
                } else {
                    this.isSuccessSignUp = false;
                }
            }).catch((err) => {
                this.isSuccessSignUp = true;
            });
            this.continueSignUp = true;
            this.isSignUp = false;
            this.loading = false;
        }
    }
</script>

<style scoped>

</style>
