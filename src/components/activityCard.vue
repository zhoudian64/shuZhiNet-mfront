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
                <v-icon>people</v-icon><span class="caption">{{item.leader}}</span>
                <v-icon>location_on</v-icon><span class="caption">{{item.address}}</span>
            </v-card-text>
            <v-card-actions>
                <v-flex>
                <v-icon small>timer</v-icon><span class="grey--text caption">报名时间: {{item.sign_up_time}}</span>
                </v-flex>
            </v-card-actions>
            <v-card-actions>
                <v-flex>
                    <v-icon small>access_time</v-icon><span class="grey--text caption">开始时间: {{item.start_time}}</span>
                </v-flex>
            </v-card-actions>
            <v-card-actions>
                <v-flex>
                    <v-icon small>timer</v-icon><span class="grey--text caption">结束时间: {{item.end_time}}</span>
                </v-flex>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-actions>
                <v-flex xs4 offset-xs4>
                    <v-btn flat small @click="isSignUp=true">报名</v-btn>
                </v-flex>
            </v-card-actions>
            <v-dialog v-model="isSignUp">
                <v-card>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="shouJhm" prepend-icon="phone" name="shouJhm" label="手机号"
                            @keyup.enter="signUp" type="text"></v-text-field>
                            <v-text-field v-model="email" prepend-icon="email" name="email" label="邮箱"
                            @keyup.enter="signUp" type="text"></v-text-field>
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

<script>
    export default {
        name: 'activityCard',
        props:{
            item: Object,
        },
        data(){
            return{
                isSignUp: false,
                shouJhm: '',
                email: '',
                loading:false
            }
        },
        methods:{
            signUp:function(){
                (async () => {
                    this.loading = true
                    await this.axios.post('http://localhost:8000/engage',{
                        ID: this.$store.state.student.username,
                        hdid: this.item.id,
                        shouJhm:this.shouJhm,
                        email:this.email,
                        Token:this.$store.state.student.token
                    }).then(res=>{
                        this.loading= false;
                        console.log(res.data);
                    })
                })()
            }
        }
    }
</script>

<style scoped>

</style>
