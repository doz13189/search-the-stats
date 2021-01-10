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
import { defineComponent } from 'vue';
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
      'seasons[]': 2019,
      'per_page': 2,
    })

    return {
      stats
    }
  }
});
</script>

<style scoped>
</style>
