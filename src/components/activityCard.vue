<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card hover min-height>
                    <v-card-title>
                        <span class="caption">{{item.title}}</span>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-icon>people</v-icon>
                        <span class="caption">{{item.leader}}</span>
                        <v-icon>location_on</v-icon>
                        <span class="caption">{{item.address}}</span>
                    </v-card-text>
                    <v-card-actions>
                        <v-flex>
                            <v-icon small>timer</v-icon>
                            <span class="grey--text caption">报名时间: {{format(item.sign_up_time,'yyyy年MM月dd日')}}</span>
                        </v-flex>
                    </v-card-actions>
                    <v-card-actions>
                        <v-flex>
                            <v-icon small>access_time</v-icon>
                            <span class="grey--text caption">开始时间: {{format(item.start_time,'yyyy年MM月dd日')}}</span>
                        </v-flex>
                    </v-card-actions>
                    <v-card-actions>
                        <v-flex>
                            <v-icon small>timer</v-icon>
                            <span class="grey--text caption">结束时间: {{format(item.end_time,'yyyy年MM月dd日')}}</span>
                        </v-flex>
                    </v-card-actions>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-flex offset-xs4 xs4>
                            <v-btn @click="isSignUp=true" flat small>报名</v-btn>
                        </v-flex>
                    </v-card-actions>
                    <v-dialog v-model="isSignUp">
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
        private phoneNumber = '';
        private email = '';
        private loading = false;

        private async signUp() {
            this.loading = true;
            const response = this.axios.post('engage', {
                activity_id: (this as any).item.id,
                phone_number: this.phoneNumber,
                mail_address: this.email,
            }, {
                headers: {
                    Authorization: "Bearer " + this.$store.state.student.token
                }
            });
            this.loading = false;
        }
    }
</script>

<style scoped>

</style>
