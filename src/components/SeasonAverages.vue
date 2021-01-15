<template>

  <div class="block">
    <!-- <p>loading : {{ thisSeasonAverages.loading.value }}</p> -->
    <!-- <p>error : {{ thisSeasonAverages.error.value }}</p> -->
    <!-- <p>loading : {{ lastSeasonAverages.loading.value }}</p> -->
    <!-- <p>error : {{ lastSeasonAverages.error.value }}</p> -->
    <ProgressBar v-if="thisSeasonAverages.loading.value && lastSeasonAverages.loading.value" />
    <Error v-if="thisSeasonAverages.error.value && lastSeasonAverages.error.value"/>
  </div>

  <div class="container" v-if="thisSeasonAverages.result.value.data && lastSeasonAverages.result.value.data">

    <div class="columns">
      
      <div class="column box m-1">
        <p class="heading">Season</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].season }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].season }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Games Played</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].games_played }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].games_played }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Min</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].min }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].min }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Field Goals Made</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].fgm }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].fgm }}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="columns">
      
      <div class="column box m-1">
        <p class="heading">Field Goals Attempted</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].fga }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].fga }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Three-Point Field Foals Made</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].fg3m }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].fg3m }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Three-Point Field Foals Attempted</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].fg3a }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].fg3a }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Free Throws Made</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].ftm }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].ftm }}</p>
          </div>
        </div>
      </div>

    </div>


    <div class="columns">
      
      <div class="column box m-1">
        <p class="heading">Average Free Throws Attempted</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].fta }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].fta }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Offensive Rebounds</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].oreb }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].oreb }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Defensive Rebounds</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].dreb }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].dreb }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Rebounds</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].reb }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].reb }}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="columns">
      
      <div class="column box m-1">
        <p class="heading">Assists</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].ast }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].ast }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Steals</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].stl }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].stl }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Blocks</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].blk }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].blk }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Turnover</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].turnover }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].turnover }}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="columns">
      
      <div class="column box m-1">
        <p class="heading">Personal Fouls</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].pf }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].pf }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Points</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].pts }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].pts }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Field Goals Percentage</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].fg_pct }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].fg_pct }}</p>
          </div>
        </div>
      </div>

      <div class="column box m-1">
        <p class="heading">Three-Point Field Goals Percentage</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].fg3_pct }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].fg3_pct }}</p>
          </div>
        </div>
      </div>

    </div>


    <div class="columns">
      
      <div class="column box m-1">
        <p class="heading">Free Throws Percentage</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].ft_pct }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].ft_pct }}</p>
          </div>
        </div>
      </div>

      <div class="column m-1"></div>

      <div class="column m-1"></div>

      <div class="column m-1"></div>

    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getSeasonAverages } from '../api/api'
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
    type getSeasonAveragesParamType = {
      season: number,
      'player_ids[]': string
    }

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

    return {
      thisSeasonAverages,
      lastSeasonAverages
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>