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
      {{ player }}
    </td>
  </tr>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { searchPlayers } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  setup() {
    const searchText = ref<string>('')
    const page = ref<number>(1)
    const players = useRequest(searchPlayers)

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
      page,
      search,
      players
    }
  }
});
</script>

<style scoped>
</style>
