<template>
  <div class="home">
    <div v-for="item in allActivities" :key="allActivities.indexOf(item)">
      <activity-card :item="item"></activity-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import activityCard from '../components/activityCard.vue'
@Component({
  components: {
    activityCard
  },
  mounted() {
      console.log(this.$store.getters.activity)
      if(!this.$store.getters.activity.length){
        console.log('fetch')
        this.axios.get("http://localhost:8000/activities").then(
          res=>{
            this.$store.commit('getActivities',res.data)
          }
        )
      }
  }
})
export default class Home extends Vue {
  get allActivities() {
      return this.$store.getters.activity
    }
}
</script>