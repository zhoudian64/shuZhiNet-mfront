<template>
    <div class="home">
        <vue-overwatch-loading :Radius="45" Color="#ffff66" v-if="!this.$store.getters.deActivity.length" class="loading"></vue-overwatch-loading>
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
        }
    })
    export default class Home extends Vue {
        private async mounted() {
            if (!this.$store.getters.deActivity.length) {
                const response = await this.axios.get("/api/all-activities");
                this.$store.commit('getActivities', response.data);
            }
        }
        get allActivities() {
            return this.$store.getters.deActivity
        }
    }
</script>

<style scoped>
.loading{
  width:320px;
  margin-left:auto;
  margin-right:auto;
}
</style>
