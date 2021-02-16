<template>

  <div class="block">
    <!-- <p>loading : {{ thisSeasonAverages.loading.value }}</p> -->
    <!-- <p>error : {{ thisSeasonAverages.error.value }}</p> -->
    <!-- <p>loading : {{ lastSeasonAverages.loading.value }}</p> -->
    <!-- <p>error : {{ lastSeasonAverages.error.value }}</p> -->
    <ProgressBar :loading="thisSeasonAverages.loading.value && lastSeasonAverages.loading.value" />
    <Error :error="thisSeasonAverages.error.value && lastSeasonAverages.error.value"/>
  </div>

  <div class="container" v-if="thisSeasonAverages.result.value.data && lastSeasonAverages.result.value.data">

    <div class="columns m-1">

      <statsCard>
        <template v-slot:title>
          Season
        </template>

        <template v-slot:thisSeason>
          {{ getSeason(thisSeasonAverages.result.value.data[0].season) }}
        </template>

        <template v-slot:lastSeason>
          {{ getSeason(lastSeasonAverages.result.value.data[0].season) }}
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          GP
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].games_played }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].games_played }}
        </template>

        <template v-slot:subTitle>
          Games Played
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          Min
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].min }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].min }}
        </template>

        <template v-slot:subTitle>
          Minutes Per Game
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          pts
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].pts }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].pts }}
        </template>

        <template v-slot:subTitle>
          Points
        </template>
      </statsCard>

    </div>

    <div class="columns m-1">

      <statsCard>
        <template v-slot:title>
          fgm
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].fgm }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].fgm }}
        </template>

        <template v-slot:subTitle>
          Field Goals Made
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          fga
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].fga }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].fga }}
        </template>

        <template v-slot:subTitle>
          Field Goals Attempted
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          fg%
        </template>

        <template v-slot:thisSeason>
          {{ multiply100(thisSeasonAverages.result.value.data[0].fg_pct) }}
        </template>
        
        <template v-slot:lastSeason>
          {{ multiply100(lastSeasonAverages.result.value.data[0].fg_pct) }}
        </template>

        <template v-slot:subTitle>
          Field Goals Percentage
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          fg3m
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].fg3m }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].fg3m }}
        </template>

        <template v-slot:subTitle>
          Three-Point Field Foals Made
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          fg3a
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].fg3a }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].fg3a }}
        </template>

        <template v-slot:subTitle>
          Three-Point Field Foals Attempted
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          fg3%
        </template>

        <template v-slot:thisSeason>
          {{ multiply100(thisSeasonAverages.result.value.data[0].fg3_pct) }}
        </template>
        
        <template v-slot:lastSeason>
          {{ multiply100(lastSeasonAverages.result.value.data[0].fg3_pct) }}
        </template>

        <template v-slot:subTitle>
          Three-Point Field Goals Percentage
        </template>
      </statsCard>

    </div>

    <div class="columns m-1"></div>

    <div class="columns m-1">

      <statsCard>
        <template v-slot:title>
          ftm
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].ftm }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].ftm }}
        </template>

        <template v-slot:subTitle>
          Free Throws Made
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          fta
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].fta }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].fta }}
        </template>

        <template v-slot:subTitle>
          Average Free Throws Attempted
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          ft%
        </template>

        <template v-slot:thisSeason>
          {{ multiply100(thisSeasonAverages.result.value.data[0].ft_pct) }}
        </template>
        
        <template v-slot:lastSeason>
          {{ multiply100(lastSeasonAverages.result.value.data[0].ft_pct) }}
        </template>

        <template v-slot:subTitle>
          Free Throws Percentage
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          oreb
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].oreb }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].oreb }}
        </template>

        <template v-slot:subTitle>
          Offensive Rebounds
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          dreb
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].dreb }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].dreb }}
        </template>

        <template v-slot:subTitle>
          Defensive Rebounds
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          reb
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].reb }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].reb }}
        </template>

        <template v-slot:subTitle>
          Rebounds
        </template>
      </statsCard>

    </div>

    <div class="columns m-1"></div>

    <div class="columns m-1">
      
      <statsCard>
        <template v-slot:title>
          ast
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].ast }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].ast }}
        </template>

        <template v-slot:subTitle>
          Assists
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          blk
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].blk }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].blk }}
        </template>

        <template v-slot:subTitle>
          Blocks
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          stl
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].stl }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].stl }}
        </template>

        <template v-slot:subTitle>
          Steals
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          pf
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].pf }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].pf }}
        </template>

        <template v-slot:subTitle>
          Personal Fouls
        </template>
      </statsCard>

      <statsCard>
        <template v-slot:title>
          to
        </template>

        <template v-slot:thisSeason>
          {{ thisSeasonAverages.result.value.data[0].turnover }}
        </template>
        
        <template v-slot:lastSeason>
          {{ lastSeasonAverages.result.value.data[0].turnover }}
        </template>

        <template v-slot:subTitle>
          Turnover
        </template>
      </statsCard>

    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getSeasonAverages } from '@/api/api'
import { UseRequest } from '@/utils/useRequest'
import { getSeasonAveragesParamType } from '@/types/api'

import ProgressBar from "@/components/ProgressBar.vue";
import Error from "@/components/Error.vue";
import statsCard from "@/parts/statsCard.vue";

export default defineComponent({
  components: {
    ProgressBar,
    Error,
    statsCard
  },
  props: {
    playerId: String,
    season: Number
  },
  setup(props) {

    const thisSeasonAverages = new UseRequest(getSeasonAverages)
    thisSeasonAverages.createRequest<getSeasonAveragesParamType>({
      'player_ids[]': props.playerId!,
      season: props.season!
    })

    const lastSeasonAverages = new UseRequest(getSeasonAverages)
    lastSeasonAverages.createRequest<getSeasonAveragesParamType>({
      'player_ids[]': props.playerId!,
      season: props.season! - 1
    })

    const getSeason = (season: number): string => {
      return `${String(season).substring(2, 4)} - ${String(season + 1).substring(2, 4)}`
    }

    const multiply100 = (pct: number): string => {
      return `${(pct * 100).toFixed(1)}%`
    }

    return {
      thisSeasonAverages,
      lastSeasonAverages,
      getSeason,
      multiply100
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>