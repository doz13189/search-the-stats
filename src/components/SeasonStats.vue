<template>
  <div class="block">
  </div>

  <div class="block">
    <!-- <p>loading : {{ stats.loading.value }}</p> -->
    <!-- <p>error : {{ stats.error.value }}</p> -->
    <ProgressBar :loading="stats.loading.value" />
    <Error :error="stats.error.value"/>
  </div>


  <!-- <p>{{ stats.result.value.meta }}</p> -->

  <div v-if="stats.result.value.data">

    <div class="table-container">
      <table class="table is-bordered" align="center">
        <thead>
          <tr>
            <th>date</th>
            <th>vs team</th>
            <th>ast</th>
            <th>blk</th>
            <th>dreb</th>
            <th>fg3_pct</th>
            <th>fg3a</th>
            <th>fg3m</th>
            <th>fg_pct</th>
            <th>fga</th>
            <th>fgm</th>
            <th>min</th>
            <th>oreb</th>
            <th>pf</th>
            <th>pts</th>
            <th>reb</th>
            <th>stl</th>
            <th>turnover</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="stat in stats.result.value.data"
              :key="stat.id"
              >
            <td>{{ stat.game.date }}</td>
            <td>{{ stat.team.id === stat.game.home_team_id ? stat.game.visitor_team_id : stat.game.home_team_id }}</td>
            <td>{{ stat.ast }}</td>
            <td>{{ stat.blk }}</td>
            <td>{{ stat.dreb }}</td>
            <td>{{ stat.fg3_pct }}</td>
            <td>{{ stat.fg3a }}</td>
            <td>{{ stat.fg3m }}</td>
            <td>{{ stat.fg_pct }}</td>
            <td>{{ stat.fga }}</td>
            <td>{{ stat.fgm }}</td>
            <td>{{ stat.min }}</td>
            <td>{{ stat.oreb }}</td>
            <td>{{ stat.pf }}</td>
            <td>{{ stat.pts }}</td>
            <td>{{ stat.reb }}</td>
            <td>{{ stat.stl }}</td>
            <td>{{ stat.turnover }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="block"></div>
  <div class="block"></div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAllStats } from '../api/api'
import { UseRequest } from '../utils/useRequest'

import ProgressBar from "@/components/ProgressBar.vue";
import Error from "@/components/Error.vue";

export default defineComponent({
  components: {
    ProgressBar,
    Error
  },
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