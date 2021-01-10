<template>
  <router-link :to="{ name: 'Search' }">Search</router-link>

  <p>playerId : {{ playerId }}</p>
  <p>season averages 2020-2021</p>
  <p>{{ thisSeasonAverages.result.value.data }}</p>
  <p>loading : {{ thisSeasonAverages.loading.value }}</p>
  <p>error : {{ thisSeasonAverages.error.value }}</p>

  <p>season averages 2019-2020</p>
  <p>{{ lastSeasonAverages.result.value.data }}</p>
  <p>loading : {{ lastSeasonAverages.loading.value }}</p>
  <p>error : {{ lastSeasonAverages.error.value }}</p>


  <p>stats</p>
  <p>loading : {{ stats.loading.value }}</p>
  <p>error : {{ stats.error.value }}</p>

  <p>{{ stats.result.value.meta }}</p>
  <tr v-for="stat in stats.result.value.data"
      :key="stat.id"
      >
    <td>
      {{ stat }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { getStats, getSeasonAverages } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  props: {
    playerId: String
  },
  setup(props) {
    const thisSeason = 2020
    const lastSeason = thisSeason - 1

    const thisSeasonAverages = useRequest(getSeasonAverages)
    thisSeasonAverages.createRequest({
      'player_ids[]': String(props.playerId),
      'season': thisSeason,
    })

    const lastSeasonAverages = useRequest(getSeasonAverages)
    lastSeasonAverages.createRequest({
      'player_ids[]': String(props.playerId),
      'season': lastSeason,
    })

    const stats = useRequest(getStats)
    stats.createRequest({
      'player_ids[]': String(props.playerId),
      'seasons[]': thisSeason,
      'per_page': 100,
      'postseason': false
    }).then(() => {
      stats.result.value.data.sort((e1: any, e2: any) => {
        return e1.game.date < e2.game.date ? 1 : -1
      })
    }).then(() => {
      stats.result.value.data = stats.result.value.data.filter((v: any, index: any) => {
        return index < 5
      })
    })

    return {
      thisSeasonAverages,
      lastSeasonAverages,
      stats
    }
  }
});
</script>

<style scoped>
</style>
