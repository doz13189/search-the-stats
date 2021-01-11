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
import { UseRequest } from '../utils/useRequest'

export default defineComponent({
  props: {
    playerId: String,
    season: Number
  },
  setup(props) {
    type getAllStatsParamType = {
      page?: number,
      per_page?: number,
      dates?: string,
      'seasons[]'?: number,
      'player_ids[]'?: string,
      game_ids?: number,
      postseason?: boolean,
      start_date?: string,
      end_date?: string
    }

    const stats = new UseRequest(getAllStats)
    // annotation is not work !! you have to check annotaion work when object passed as args
    stats.createRequest<getAllStatsParamType>({
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