<template>
  <!-- <p>{{ players.value }}</p> -->
  <table class="table is-bordered" align="center">
    <thead>
      <th></th>
      <th>name</th>
      <th>position</th>
      <th>team</th>
    </thead>

    <tbody>
      <tr v-for="player in players.result.value.data"
          :key="player.id"
          >
        <td>
          <router-link class="button is-primary is-small is-rounded" :to="{ name: 'Stats', params: { playerId: player.id } }">Check the Stats</router-link>
        </td>
        <td >
          {{ player.first_name }} {{ player.last_name }}
        </td>
        <td >
          {{ player.position }}
        </td>
        <td >
          {{ player.team.full_name }}
        </td>
        <!-- <td >
          {{ player }}
        </td> -->
      </tr>
    </tbody>
  </table>
  <div class="block"></div>
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