<template>
  <p>loading : {{ specificPlayer.loading.value }}</p>
  <p>error : {{ specificPlayer.error.value }}</p>

  <table align="center">
    <!-- <thead>
      <th></th>
    </thead> -->

    <tbody>
      <tr v-for="player in Object.entries(specificPlayer.result.value)"
          :key="player"
          >
          <td>{{ player[0] }}</td>
          <td>{{ player[1] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getSpecificPlayer } from '../api/api'
import { UseRequest } from '../utils/useRequest'

export default defineComponent({
  props: {
    playerId: String
  },
  setup(props) {

    type getSpecificPlayerParamType = {
      id: string
    }
    const specificPlayer = new UseRequest(getSpecificPlayer)
    specificPlayer.createRequest<getSpecificPlayerParamType>({
      id: props.playerId!
    })

    return {
      specificPlayer
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>