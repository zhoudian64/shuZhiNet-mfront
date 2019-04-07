<template>
    <div class="about">
        <div v-for="item in myActivities" :key="item.id">
            <activity-card :item="item"></activity-card>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ActivityCard from '../components/activityCard.vue'

    @Component({
        components: {
            ActivityCard
        },
        async mounted() {
            const response = await this.axios.get("/api/participating-activities").then((res) => {
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

