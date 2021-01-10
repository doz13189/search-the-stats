<template>
  <router-link :to="{ name: 'Search' }">Search</router-link>

  <p>playerId : {{ playerId }}</p>
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
import { getStats } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  props: {
    playerId: String
  },
  setup(props) {
    const stats = useRequest(getStats)
    stats.createRequest({
      'player_ids[]': String(props.playerId),
      'seasons[]': 2020,
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
      stats
    }
  }
});
</script>

<style scoped>
</style>
