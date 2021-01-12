<template>
  <input type="text" v-model="searchText" data-testid="search-input">
  <button @click="search()" :disabled="!searchText" data-testid="search-button">search</button>

  <p>loading : {{ players.loading.value }}</p>
  <p>error : {{ players.error.value }}</p>

  <div v-if="players.result.value.data">

    <p>page : {{ page }}</p>
    <p>current_page : {{ players.result.value.meta?.current_page }}</p>
    <p>total page : {{ players.result.value.meta?.total_pages }}</p>
    <button @click="page--" :disabled="players.result.value.meta?.current_page === 1">previous</button>
    <button @click="page++" :disabled="players.result.value.meta?.current_page === players.result.value.meta?.total_pages">next</button>
    <hr>

    <Players :players="players"/>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { UseRequest } from '../utils/useRequest'
import { getAllPlayers } from '../api/api'

import Players from "@/components/Players.vue";

export default defineComponent({
  components: {
    Players
  },
  setup() {
    type getAllPlayersParamType = {
      search?: string,
      page?: number,
      per_page?: number
    }

    const searchText = ref<string>('')
    const page = ref<number>(1)
    const players = new UseRequest(getAllPlayers)

    const search: (page?: number) => void = (page = 1): void => {
      players.createRequest<getAllPlayersParamType>({
        search: searchText.value,
        page: page
      })
      .then(() => {
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
