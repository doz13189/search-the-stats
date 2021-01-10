<template>
  <p>Specific Game</p>
  <p>{{ game.result.value }}</p>
  <p>loading : {{ game.loading.value }}</p>
  <p>error : {{ game.error.value }}</p>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getSpecificGame } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  setup() {
    const game = useRequest(getSpecificGame)
    game.createRequest(127630).then(() => console.log(game.result.value) )
    
    return {
      // search,
      game
    }
  }
});
</script>

<style scoped>
</style>
