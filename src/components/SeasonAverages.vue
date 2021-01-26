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
      
      <div class="column box m-1">
        <p class="heading">Season</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ getSeason(thisSeasonAverages.result.value.data[0].season) }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ getSeason(lastSeasonAverages.result.value.data[0].season) }}</p>
          </div>
        </div>
        <p class="heading"></p>
      </div>

      <div class="column box m-1">
        <p class="heading">GP</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].games_played }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].games_played }}</p>
          </div>
        </div>
        <p class="heading">Games Played</p>
      </div>

      <div class="column box m-1">
        <p class="heading">Min</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].min }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].min }}</p>
          </div>
        </div>
        <p class="heading">Minutes Per Game</p>
      </div>

      <div class="column box m-1">
        <p class="heading">pts</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].pts }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].pts }}</p>
          </div>
        </div>
        <p class="heading">Points</p>
      </div>

    </div>

    <div class="columns m-1">

      <div class="column box m-1">
        <p class="heading">fgm</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].fgm }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].fgm }}</p>
          </div>
        </div>
        <p class="heading">Field Goals Made</p>
      </div>
      
      <div class="column box m-1">
        <p class="heading">fga</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].fga }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].fga }}</p>
          </div>
        </div>
        <p class="heading">Field Goals Attempted</p>
      </div>

      <div class="column box m-1">
        <p class="heading">fg%</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].fg_pct }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].fg_pct }}</p>
          </div>
        </div>
        <p class="heading">Field Goals Percentage</p>
      </div>

      <div class="column box m-1">
        <p class="heading">fg3m</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].fg3m }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].fg3m }}</p>
          </div>
        </div>
        <p class="heading">Three-Point Field Foals Made</p>
      </div>

      <div class="column box m-1">
        <p class="heading">fg3a</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].fg3a }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].fg3a }}</p>
          </div>
        </div>
        <p class="heading">Three-Point Field Foals Attempted</p>
      </div>

      <div class="column box m-1">
        <p class="heading">fg3%</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].fg3_pct }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].fg3_pct }}</p>
          </div>
        </div>
        <p class="heading">Three-Point Field Goals Percentage</p>
      </div>

    </div>

    <div class="columns m-1"></div>

    <div class="columns m-1">

      <div class="column box m-1">
        <p class="heading">ftm</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].ftm }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].ftm }}</p>
          </div>
        </div>
        <p class="heading">Free Throws Made</p>
      </div>

      <div class="column box m-1">
        <p class="heading">fta</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].fta }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].fta }}</p>
          </div>
        </div>
        <p class="heading">Average Free Throws Attempted</p>
      </div>

      <div class="column box m-1">
        <p class="heading">ft%</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].ft_pct }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].ft_pct }}</p>
          </div>
        </div>
        <p class="heading">Free Throws Percentage</p>
      </div>

      <div class="column box m-1">
        <p class="heading">oreb</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].oreb }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].oreb }}</p>
          </div>
        </div>
        <p class="heading">Offensive Rebounds</p>
      </div>

      <div class="column box m-1">
        <p class="heading">dreb</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].dreb }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].dreb }}</p>
          </div>
        </div>
        <p class="heading">Defensive Rebounds</p>
      </div>

      <div class="column box m-1">
        <p class="heading">reb</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].reb }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].reb }}</p>
          </div>
        </div>
        <p class="heading">Rebounds</p>
      </div>

    </div>

    <div class="columns m-1"></div>

    <div class="columns m-1">
      
      <div class="column box m-1">
        <p class="heading">ast</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].ast }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].ast }}</p>
          </div>
        </div>
        <p class="heading">Assists</p>
      </div>

      <div class="column box m-1">
        <p class="heading">blk</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].blk }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].blk }}</p>
          </div>
        </div>
        <p class="heading">Blocks</p>
      </div>

      <div class="column box m-1">
        <p class="heading">stl</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].stl }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].stl }}</p>
          </div>
        </div>
        <p class="heading">Steals</p>
      </div>

      <div class="column box m-1">
        <p class="heading">pf</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].pf }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].pf }}</p>
          </div>
        </div>
        <p class="heading">Personal Fouls</p>
      </div>

      <div class="column box m-1">
        <p class="heading">to</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title is-5 has-text-danger">{{ thisSeasonAverages.result.value.data[0].turnover }}</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-info">{{ lastSeasonAverages.result.value.data[0].turnover }}</p>
          </div>
        </div>
        <p class="heading">Turnover</p>
      </div>

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

    return {
      thisSeasonAverages,
      lastSeasonAverages,
      getSeason
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>