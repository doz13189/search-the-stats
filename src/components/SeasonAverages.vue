<template>
  <p>season averages {{ season }}- {{ season - 1 }}</p>
  <!-- <p>{{ SeasonAverages.result.value.data[0] }}</p> -->
  <p>loading : {{ SeasonAverages.loading.value }}</p>
  <p>error : {{ SeasonAverages.error.value }}</p>
  <p>{{ SeasonAverages.result.value?.data }}</p>

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

    const SeasonAverages = new UseRequest(getSeasonAverages)
    SeasonAverages.createRequest<getSeasonAveragesParamType>({
      'player_ids[]': props.playerId!,
      season: props.season!
    })

    return {
      SeasonAverages
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>