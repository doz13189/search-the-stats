<template>
  <p>playerId : {{ playerId }}</p>
  <p>season averages {{ season }}- {{ season - 1 }}</p>
  <p>{{ SeasonAverages.result.value.data }}</p>
  <p>loading : {{ SeasonAverages.loading.value }}</p>
  <p>error : {{ SeasonAverages.error.value }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getSeasonAverages } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  props: {
    playerId: String,
    season: Number
  },
  setup(props) {
    const SeasonAverages = useRequest(getSeasonAverages)
    SeasonAverages.createRequest({
      'player_ids[]': props.playerId,
      season: props.season
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