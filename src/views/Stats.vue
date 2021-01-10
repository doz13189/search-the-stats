<template>
  <router-link :to="{ name: 'Search' }">Search</router-link>

  <SeasonAverages :playerId="playerId" :season="thisSeason"/>
  <SeasonAverages :playerId="playerId" :season="lastSeason"/>
  <SeasonStats :playerId="playerId" :season="thisSeason"/>

</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { getStats, getSeasonAverages } from '../api/api'
import { useRequest } from '../utils/useRequest'

import SeasonAverages from '@/components/SeasonAverages.vue';
import SeasonStats from '@/components/SeasonStats.vue';

export default defineComponent({
  props: {
    playerId: String
  },
  components: {
    SeasonAverages,
    SeasonStats
  },
  setup(props) {
    const thisSeason = 2020
    const lastSeason = thisSeason - 1

    return {
      thisSeason,
      lastSeason
    }
  }
});
</script>

<style scoped>
</style>
