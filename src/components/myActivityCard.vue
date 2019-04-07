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
                            <v-btn @click="CancelSignUp" flat small color="yellow">取消报名</v-btn>
                        </v-flex>
                    </v-card-actions>
                    <v-dialog v-model="notCancel">
                        <v-card>
                            <v-card-text>
                                取消报名失败,请重试
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn @click="notCancel = false" color="primary" block>
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
        private notCancel = false;

        public async CancelSignUp() {
            const response = await this.axios.post('api/opt-out', {
                    activity_id: (this as any).item.id,
                }
            ).then((res) => {
                if (res.status === 200) {
                    this.$store.commit('cancelActivity', (this as any).item)
                } else {
                    this.notCancel = true;
                }
            }).catch((err) => {
                this.notCancel = true;
            });
        }
    }
</script>

<style scoped>

</style>
