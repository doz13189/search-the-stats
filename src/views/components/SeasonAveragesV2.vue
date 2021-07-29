<template>

  <p class="subtitle has-text-black">SEASON STATS</p>

  <p class="heading has-text-black">Please choose the season</p>
  <div class="columns">
    <div class="column"></div>

    <div class="column">
      <div class="select is-primary">
        <select v-model="selectedFirstSeason">
          <option v-for="firstSeason in seasonList" :key="firstSeason.id" :value="firstSeason">{{ getSeason(firstSeason) }}</option>
        </select>
      </div>

    </div>

    <div class="column">
      <div class="select is-primary">
        <select v-model="selectedSecondSeason">
          <option v-for="secondSeason in seasonList" :key="secondSeason.id" :value="secondSeason">{{ getSeason(secondSeason) }}</option>
        </select>
      </div>
    </div>
    
    <div class="column"></div>
  </div>

  <div class="block"></div>

  <div class="block">
    <ProgressBar :loading="firstSeasonAverages.loading.value || secondSeasonAverages.loading.value" />
    <Error :error="firstSeasonAverages.error.value || secondSeasonAverages.error.value"/>
  </div>

  <div class="container" v-if="firstSeasonAverages.result.value.data && secondSeasonAverages.result.value.data">
  <!-- <div v-if="stats.result.value.data"> -->

    <div class="table-container">
      <table class="table is-bordered" align="center">
        <thead>
          <tr>
            <th>SEASON</th>
            <th>GP</th>
            <th>MIN</th>
            <th>PTS</th>
            <th>FGM</th>
            <th>FGA</th>
            <th>FG%</th>
            <th>FG3M</th>
            <th>FG3A</th>
            <th>FG3%</th>
            <th>FTM</th>
            <th>FTA</th>
            <th>FT%</th>
            <th>OREB</th>
            <th>DREB</th>
            <th>REB</th>
            <th>AST</th>
            <th>BLK</th>
            <th>STL</th>
            <th>PF</th>
            <th>TO</th>

          </tr>
        </thead>

        <tbody>
          <tr v-for="stat in firstSeasonAverages.result.value.data"
              :key="stat.id"
              >
            <td>{{ getSeason(stat.season) }}</td>
            <td>{{ stat.games_played }}</td>
            <td>{{ stat.min }}</td>
            <td>{{ stat.pts }}</td>
            <td>{{ stat.fgm }}</td>
            <td>{{ stat.fga }}</td>
            <td>{{ multiply100(stat.fg_pct) }}</td>
            <td>{{ stat.fg3m }}</td>
            <td>{{ stat.fg3a }}</td>
            <td>{{ multiply100(stat.fg3_pct) }}</td>
            <td>{{ stat.ftm }}</td>
            <td>{{ stat.fta }}</td>
            <td>{{ multiply100(stat.ft_pct) }}</td>
            <td>{{ stat.oreb }}</td>
            <td>{{ stat.dreb }}</td>
            <td>{{ stat.reb }}</td>
            <td>{{ stat.ast }}</td>
            <td>{{ stat.blk }}</td>
            <td>{{ stat.stl }}</td>
            <td>{{ stat.pf }}</td>
            <td>{{ stat.turnover }}</td>
          </tr>

          <tr v-for="stat in secondSeasonAverages.result.value.data"
              :key="stat.id"
              >
            <td>{{ getSeason(stat.season) }}</td>
            <td>{{ stat.games_played }}</td>
            <td>{{ stat.min }}</td>
            <td>{{ stat.pts }}</td>
            <td>{{ stat.fgm }}</td>
            <td>{{ stat.fga }}</td>
            <td>{{ multiply100(stat.fg_pct) }}</td>
            <td>{{ stat.fg3m }}</td>
            <td>{{ stat.fg3a }}</td>
            <td>{{ multiply100(stat.fg3_pct) }}</td>
            <td>{{ stat.ftm }}</td>
            <td>{{ stat.fta }}</td>
            <td>{{ multiply100(stat.ft_pct) }}</td>
            <td>{{ stat.oreb }}</td>
            <td>{{ stat.dreb }}</td>
            <td>{{ stat.reb }}</td>
            <td>{{ stat.ast }}</td>
            <td>{{ stat.blk }}</td>
            <td>{{ stat.stl }}</td>
            <td>{{ stat.pf }}</td>
            <td>{{ stat.turnover }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="block"></div>

</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from 'vue';
import { getSeasonAverages } from '@/api/api'
import { UseRequest } from '@/utils/useRequest'
import { getSeasonAveragesParamType } from '@/types/api'

import ProgressBar from "@/components/ProgressBar.vue";
import Error from "@/components/Error.vue";
// import statsCard from "@/parts/statsCard.vue";

export default defineComponent({
  components: {
    ProgressBar,
    Error,
    // statsCard
  },
  props: {
    playerId: String,
    season: Number
  },
  setup(props) {

    const selectedFirstSeason = ref<number>(props.season!)
    const selectedSecondSeason = ref<number>(props.season! - 1)

    const seasonList = computed<number[]>(() => {
      return [...Array(props.season! + 1).keys()].filter(v => v >= 2000).sort((a, b) => b - a)
    })

    const firstSeasonAverages = new UseRequest(getSeasonAverages)
    watchEffect(() => {
      firstSeasonAverages.createRequest<getSeasonAveragesParamType>({
        'player_ids[]': props.playerId!,
        season: selectedFirstSeason.value
      })
    })

    const secondSeasonAverages = new UseRequest(getSeasonAverages)
    watchEffect(() => {
      secondSeasonAverages.createRequest<getSeasonAveragesParamType>({
        'player_ids[]': props.playerId!,
        season: selectedSecondSeason.value
      })
    })

    const getSeason = (season: number): string => {
      return `${String(season).substring(2, 4)} - ${String(season + 1).substring(2, 4)}`
    }

    const multiply100 = (pct: number): string => {
      return `${(pct * 100).toFixed(1)}%`
    }

    return {
      selectedFirstSeason,
      firstSeasonAverages,
      selectedSecondSeason,
      secondSeasonAverages,
      seasonList,
      getSeason,
      multiply100
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>