<template>

  <p class="subtitle has-text-black">BASIC INFORMATION</p>

  <div class="block">
    <!-- <p>loading : {{ players.loading.value }}</p> -->
    <!-- <p>error : {{ players.error.value }}</p> -->
    <ProgressBar :loading="specificPlayer.loading.value" />
    <Error :error="specificPlayer.error.value"/>
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
          <!-- <td>
            <noData>
              <template v-slot:infomation>
                {{ specificPlayer.result.value.first_name }} {{ specificPlayer.result.value.last_name }}
              </template>
            </noData>
          </td> -->
        </tr>
        <tr>
          <th>position</th>
          <td>{{ specificPlayer.result.value.position }}</td>
        </tr>
        <tr>
          <th>height</th>
          <td>{{ specificPlayer.result.value.height_feet }}' {{ specificPlayer.result.value.height_inches }}"</td>
        </tr>
        <tr>
          <th>weight</th>
          <td>{{ specificPlayer.result.value.weight_pounds }} lbs</td>
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

  <div class="block"></div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getSpecificPlayer } from '@/api/api'
import { UseRequest } from '@/utils/useRequest'
import { getSpecificPlayerParamType } from '@/types/api'

import ProgressBar from "@/components/ProgressBar.vue";
import Error from "@/components/Error.vue";

export default defineComponent({
  components: {
    ProgressBar,
    Error
  },
  props: {
    playerId: String
  },
  setup(props) {

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