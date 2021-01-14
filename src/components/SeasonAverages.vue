<template>
  <div class="block">
    <p>season averages {{ season }}- {{ season - 1 }}</p>
    <p>loading : {{ thisSeasonAverages.loading.value }}</p>
    <p>error : {{ thisSeasonAverages.error.value }}</p>
  </div>

  <div class="block">
    <p>season averages {{ season - 1 }}- {{ season - 2 }}</p>
    <p>loading : {{ lastSeasonAverages.loading.value }}</p>
    <p>error : {{ lastSeasonAverages.error.value }}</p>
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
        <p class="heading">games_played</p>
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
        <p class="heading">min</p>
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
        <p class="heading">fgm</p>
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
        <p class="heading">fga</p>
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
        <p class="heading">fg3m</p>
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
        <p class="heading">fg3a</p>
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
        <p class="heading">ftm</p>
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
        <p class="heading">fta</p>
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
        <p class="heading">oreb</p>
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
        <p class="heading">dreb</p>
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
        <p class="heading">reb</p>
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
        <p class="heading">ast</p>
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
        <p class="heading">stl</p>
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
        <p class="heading">blk</p>
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
        <p class="heading">turnover</p>
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
        <p class="heading">pf</p>
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
        <p class="heading">pts</p>
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
        <p class="heading">fg_pct</p>
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
        <p class="heading">fg3_pct</p>
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
        <p class="heading">pf</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="title has-text-danger">{{ thisSeasonAverages.result.value.data[0].pf }}</p>
          </div>
          <div class="column">
            <p class="title has-text-info">{{ lastSeasonAverages.result.value.data[0].pf }}</p>
          </div>
        </div>
      </div>

      <div class="column m-1"></div>

      <div class="column m-1"></div>

      <div class="column m-1"></div>

    </div>

  </div>


  <!-- 
  <div v-if="thisSeasonAverages.result.value.data && lastSeasonAverages.result.value.data">
    <div class="table-container">
      <table class="table is-bordered" align="center">
        <thead>
          <th v-for="stat in Object.entries(thisSeasonAverages.result.value.data[0])" :key="stat.id">
            {{ stat[0] }}
          </th>
        </thead>

        <tbody>
          
          <tr>
            <td v-for="stat in Object.entries(thisSeasonAverages.result.value.data[0])" :key="stat.id">
              {{ stat[1] }}
            </td>
          </tr>

          <tr>
            <td v-for="stat in Object.entries(lastSeasonAverages.result.value.data[0])" :key="stat.id">
              {{ stat[1] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  -->


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getSeasonAverages } from '../api/api'
import { UseRequest } from '../utils/useRequest'

export default defineComponent({
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