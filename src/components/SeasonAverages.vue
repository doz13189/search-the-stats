<template>
  <p>season averages {{ season }}- {{ season - 1 }}</p>
  <!-- <p>{{ thisSeasonAverages.result.value.data[0] }}</p> -->
  <p>loading : {{ thisSeasonAverages.loading.value }}</p>
  <p>error : {{ thisSeasonAverages.error.value }}</p>
  <div v-if="thisSeasonAverages.result.value.data">
    <p>{{ thisSeasonAverages.result.value.data[0] }}</p>
  </div>

  <p>season averages {{ season - 1 }}- {{ season - 2 }}</p>
  <!-- <p>{{ thisSeasonAverages.result.value.data[0] }}</p> -->
  <p>loading : {{ lastSeasonAverages.loading.value }}</p>
  <p>error : {{ lastSeasonAverages.error.value }}</p>

  <div v-if="lastSeasonAverages.result.value.data">
    <p>{{ lastSeasonAverages.result.value.data[0] }}</p>
  </div>

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