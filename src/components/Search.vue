<template>
  <input type="search" v-model="searchText">
  <button @click="search()">search</button>
  <p>{{ searchText }}</p>

  <p>loading : {{ players.loading.value }}</p>
  <p>error : {{ players.error.value }}</p>

  <button @click="page--">previous</button>
  <button @click="page++">next</button>
  <p>page : {{ page }}</p>
  <p>current_page : {{ players.result.value.meta?.current_page }}</p>
  <p>total page : {{ players.result.value.meta?.total_pages }}</p>
  <p>{{ players.result.value.meta }}</p>

  <tr v-for="player in players.result.value.data"
      :key="player.id"
      >
    <td>
      <button @click="playerId = player.id">detail</button>
    </td>
    <td >
      {{ player }}
    </td>
  </tr>
  <Stats :playerId="playerId"/>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { searchPlayers } from '../api/api'
import { useRequest } from '../utils/useRequest'

import Stats from "./Stats.vue";

export default defineComponent({
  components: {
    Stats
  },
  setup() {
    const searchText = ref<string>('')
    const page = ref<number>(1)
    const players = useRequest(searchPlayers)
    const playerId = ref<number | null>(null)

    const search = (page = 1) => {
      players.createRequest({
        search: searchText.value,
        page: page
      }).then(() => {
        page = players.result.value.meta.current_page
      })
    }

    watch(page, () => search(page.value))
    
    return {
      searchText,
      playerId,
      page,
      search,
      players
    }
  }
});
</script>

<style scoped>
</style>
