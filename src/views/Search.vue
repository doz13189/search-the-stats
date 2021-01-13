<template>

  <div class="block">
    Please enter <strong>the player name</strong>.
  </div>

  <div class="columns is-mobile is-centered">
    <div class="field has-addons">
      <div class="control">
        <input class="input is-rounded" type="text" v-model="searchText" data-testid="search-input">
      </div>
      <div class="control">
        <button class="button is-rounded" @click="search()" :disabled="!searchText" data-testid="search-button">
          Search
        </button>
      </div>
    </div>
  </div>
  
  <p>loading : {{ players.loading.value }}</p>
  <p>error : {{ players.error.value }}</p>

  <div v-if="players.result.value.data">

    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Page</p>
          <p class="title" data-testid="page-paragraph">{{ page }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Current Page</p>
          <p class="title" data-testid="current-page-paragraph">{{ players.result.value.meta?.current_page }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Total Page</p>
          <p class="title" data-testid="total-page-paragraph">{{ players.result.value.meta?.total_pages }}</p>
        </div>
      </div>
    </nav>

    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <button
          @click="page--"
          :disabled="players.result.value.meta?.current_page === 1"
          data-testid="previous-button">
          previous
        </button>
      </div>
      <div class="level-item has-text-centered">
        <button
          @click="page++"
          :disabled="players.result.value.meta?.current_page === players.result.value.meta?.total_pages"
          data-testid="next-button">
          next
        </button>
      </div>
    </nav>

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
