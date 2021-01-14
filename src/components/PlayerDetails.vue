<template>

  <div class="block">
    <p>loading : {{ specificPlayer.loading.value }}</p>
    <p>error : {{ specificPlayer.error.value }}</p>
  </div>

  <div v-if="specificPlayer.result.value">
    <table class="table is-bordered" align="center">
      <!-- <thead>
        <th></th>
      </thead> -->

      <tbody>
        <tr>
          <th>name</th>
          <td>{{ specificPlayer.result.value.first_name }} {{ specificPlayer.result.value.last_name }}</td>
        </tr>
        <tr>
          <th>position</th>
          <td>{{ specificPlayer.result.value.position }}</td>
        </tr>
        <tr>
          <th>height_feet</th>
          <td>{{ specificPlayer.result.value.height_feet }}</td>
        </tr>
        <tr>
          <th>height_inches</th>
          <td>{{ specificPlayer.result.value.height_inches }}</td>
        </tr>
        <tr>
          <th>weight_pounds</th>
          <td>{{ specificPlayer.result.value.weight_pounds }}</td>
        </tr>
        <tr>
          <th>team</th>
          <td>{{ specificPlayer.result.value.team?.full_name }}</td>
        </tr>
        <tr>
          <th>conference</th>
          <td>{{ specificPlayer.result.value.team?.conference }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- <table class="table is-bordered" align="center">
    <thead>
      <th></th>
    </thead>

    <tbody>
      <tr v-for="player in Object.entries(specificPlayer.result.value)" :key="player">
          <td>{{ player[0] }}</td>
          <td>{{ player[1] }}</td>
      </tr>
    </tbody>
  </table> -->
  

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