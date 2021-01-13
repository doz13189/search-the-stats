<template>
  <div class="block"></div>

  <router-link class="button is-primary is-rounded" :to="{ name: 'Search' }">Back</router-link>

  <PlayerDetails :playerId="playerId"/>
  <SeasonAverages :playerId="playerId" :season="thisSeason"/>
  <!-- <SeasonAverages :playerId="playerId" :season="lastSeason"/> -->
  <SeasonStats :playerId="playerId" :season="thisSeason"/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SeasonAverages from '@/components/SeasonAverages.vue';
import SeasonStats from '@/components/SeasonStats.vue';
import PlayerDetails from '@/components/PlayerDetails.vue';

export default defineComponent({
  props: {
    playerId: String
  },
  components: {
    SeasonAverages,
    SeasonStats,
    PlayerDetails
  },
  setup() {
    const thisSeason: number = new Date().getFullYear() - 1
    // const lastSeason: number = thisSeason - 1

    return {
      thisSeason,
      // lastSeason
    }
  }
});
</script>

<style scoped>
</style>
