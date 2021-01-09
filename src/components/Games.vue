<template>
  <p>{{ new Date().toLocaleString('en-GB') }}</p>
  <!-- <p>{{ games.result.value.data }}</p> -->
    <!-- :class="['clickable', email.read ? 'read' : '']"
    @click="openEmail(email)"> -->
    <tr v-for="game in games.result.value.data"
        :key="game.id"
        >
      <td>
        {{ game.home_team.full_name }}
      </td>
      <td>
        {{ game.home_team_score }}
      </td>
      <td> - </td>
      <td>
        {{ game.visitor_team_score }}
      </td>
      <td>
        {{ game.visitor_team.full_name }}
      </td>
    </tr>
  <p>loading : {{ games.loading.value }}</p>
  <p>error : {{ games.error.value }}</p>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getAllGames } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  setup() {
    const games = useRequest(getAllGames)
    games.createRequest({
      'dates[]': '20210108'
    }).then(() => console.log(games.result.value) )
    
    return {
      // search,
      games
    }
  }
});
</script>

<style scoped>
</style>
