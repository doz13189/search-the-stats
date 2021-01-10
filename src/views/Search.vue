<template>
  <input type="search" v-model="searchText">
  <button @click="search()">search</button>

  <p>loading : {{ players.loading.value }}</p>
  <p>error : {{ players.error.value }}</p>

  <button @click="page--">previous</button>
  <button @click="page++">next</button>
  <p>page : {{ page }}</p>
  <p>current_page : {{ players.result.value.meta?.current_page }}</p>
  <p>total page : {{ players.result.value.meta?.total_pages }}</p>

  <Players :players="players"/>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRequest } from '../utils/useRequest'
import { getAllPlayers } from '../api/api'

import Players from "./Players.vue";

export default defineComponent({
  components: {
    Players
  },
  setup() {
    const searchText = ref<string>('')
    const page = ref<number>(1)
    const players = useRequest(getAllPlayers)

    const search: (page?: number) => void = (page = 1): void => {
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
