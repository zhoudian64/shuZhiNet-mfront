<template>
    <div class="home">
        <v-progress-linear color="yellow" :indeterminate="true" v-if="!this.$store.getters.activity.length"></v-progress-linear>
        <div :key="allActivities.indexOf(item)" v-for="item in allActivities" v-else>
            <activity-card :item="item"></activity-card>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import activityCard from '../components/activityCard.vue'

    @Component({
        components: {
            activityCard
        },
        async mounted() {
            if (!this.$store.getters.activity.length) {
                const response = await this.axios.get("activities");
                this.$store.commit('getActivities', response.data);
            }
        }
    })
    export default class Home extends Vue {
        get allActivities() {
            return this.$store.getters.activity
        }
    }
</script>
