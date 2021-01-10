<template>
  <p>playerId : {{ playerId }}</p>
  <tr v-for="stat in stats.result.value.data"
      :key="stat.id"
      >
    <td>
      {{ stat }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
// import { defineComponent } from 'vue';
import { getStats } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  props: {
    playerId: Number
  },
  setup(props) {
    const stats = useRequest(getStats)

    watch(props, () => {
      stats.createRequest({
        'player_ids[]': props.playerId,
        'seasons[]': 2020
      })
    })

    return {
      stats
    }
  }
});
</script>

<style scoped>
</style>
