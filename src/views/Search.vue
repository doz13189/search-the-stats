<template>
  <div class="block">
    Search the stats of NBA players
  </div>

  <div class="columns is-mobile is-centered">
    <div class="field has-addons">
      <div class="control">
        <input class="input is-rounded" type="text" v-model="searchText" data-testid="search-input">
      </div>
      <div class="control">
        <button class="button is-rounded is-primary" @click="search()" :disabled="!searchText" data-testid="search-button">
          Search
        </button>
      </div>
    </div>
  </div>
  
  <div class="block">
    <!-- <p>loading : {{ players.loading.value }}</p> -->
    <!-- <p>error : {{ players.error.value }}</p> -->
    <ProgressBar v-if="players.loading.value" />
    <Error v-if="players.error.value"/>
  </div>

  <div v-if="players.result.value.data">

    <div class="columns is-gapless">
      <div class="column"></div>
      <div class="column">
        <p class="heading">Current Page</p>
        <p class="title" data-testid="current-page-paragraph">{{ players.result.value.meta?.current_page }}</p>
      </div>
      <div class="column">
        <p class="heading">Total Page</p>
        <p class="title" data-testid="total-page-paragraph">{{ players.result.value.meta?.total_pages }}</p>
      </div>
      <div class="column"></div>
    </div>

    <div class="columns is-gapless">
      <div class="column"></div>
      <div class="column">
        <button
          class="button is-rounded"
          @click="page--"
          :disabled="players.result.value.meta?.current_page === 1"
          data-testid="previous-button">
          previous
        </button>
      </div>
      <div class="column">
        <button
          class="button is-rounded"
          @click="page++"
          :disabled="players.result.value.meta?.current_page === players.result.value.meta?.total_pages"
          data-testid="next-button">
          next
        </button>
      </div>
      <div class="column"></div>
    </div>

    <Players :players="players"/>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { UseRequest } from '../utils/useRequest'
import { getAllPlayers } from '../api/api'

import Players from "@/components/Players.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import Error from "@/components/Error.vue";


export default defineComponent({
  components: {
    Players,
    ProgressBar,
    Error
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
