<template>
    <div class="home">
        <vue-overwatch-loading :Radius="45" v-if="!this.$store.getters.deActivity.length" class="loading"></vue-overwatch-loading>
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
            if (!this.$store.getters.deActivity.length) {
                const response = await this.axios.get("api/all-activities");
                this.$store.commit('getActivities', response.data);
            }
        }
    })
    export default class Home extends Vue {
        get allActivities() {
            return this.$store.getters.tiActivity
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
