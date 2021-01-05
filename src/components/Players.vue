<template>
  <div>
    <p>{{ msg }}</p>

    <!-- <div v-if="Object.keys(player.result).length"> -->
      <p>team : {{ player.result.value.team?.full_name }}</p>
      <p>player : {{ player.result.value.first_name }} {{ player.result.value.last_name }}</p>
    <!-- </div> -->

    <p>loading : {{ player.loading.value }}</p>
    <p>error : {{ player.error.value }}</p>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getPlayers } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const playerObj = ref<object>()

    const player = useRequest(getPlayers)
    player.createRequest(666609)
      // .then(() => {
      //   playerObj.value = player.result.value
      // })

    return {
      player
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
