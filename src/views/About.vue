<template>
    <div class="about">
        <div v-for="item in myActivities" :key="item.id">
            <my-activity-card :item="item"></my-activity-card>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import myActivityCard from '../components/myActivityCard.vue'

    @Component({
        components: {
            myActivityCard
        },
        async mounted() {
            const response = await this.axios.get("myactivities").then((res) => {
                this.$store.commit('getMyActivities', res.data)
            })
        }
    })
    export default class Home extends Vue {
        get myActivities() {
            return this.$store.getters.myActivity
        }
    }
</script>

