<template>
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
import { defineComponent } from 'vue';
import { getAllStats } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  props: {
    playerId: String,
    season: Number
  },
  setup(props) {

    const stats = useRequest(getAllStats)
    stats.createRequest({
      'player_ids[]': props.playerId,
      'seasons[]': props.season,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>