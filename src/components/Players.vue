<template>
  <!-- <p>{{ players.value }}</p> -->
  <tr v-for="player in players.result.value.data"
      :key="player.id"
      >
    <td>
      <router-link :to="{ name: 'Stats', params: { playerId: player.id } }">Stats</router-link>
    </td>
    <td >
      {{ player }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    players: Object
  },
  setup() {
    return {
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>