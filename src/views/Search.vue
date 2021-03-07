<template>

  <div class="block">
    <!-- <p :style="{ backgroundColor: false ? 'red' : 'blue' }"> -->
    <!-- <p :class="false ? 'has-text-primary' : 'has-text-link' "> -->
    <p class="title is-5 has-text-black" data-testid="search-text-paragraph">
      {{ searchTextParagraph }}
    </p>
  </div>

  <div class="columns is-mobile is-centered">
    <div class="field has-addons">
      <div class="control">
        <input
          class="input is-rounded"
          type="text"
          v-model="searchText"
          @focus="focus"
          @blur="blur"
          @keyup.enter="search()"
          data-testid="search-input"
          >
      </div>
      <div class="control">
        
        <!-- :disabled="!searchText" -->
        <button class="button is-rounded is-primary"
          @click="search()"
          data-testid="search-button">
          SEARCH
        </button>
      </div>
    </div>
  </div>

  <div class="block">
    <!-- <p>loading : {{ players.loading.value }}</p> -->
    <!-- <p>error : {{ players.error.value }}</p> -->
    <ProgressBar :loading="players.loading.value" />
    <Error :error="players.error.value"/>
  </div>

  <div v-if="players.result.value.data">

    <div v-if="players.result.value.meta?.total_count">

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

      <Players :players="players"/>

      <div class="columns is-gapless">
        <div class="column"></div>
        <div class="column m-1">
          <button
            class="button is-rounded"
            @click="page--"
            :disabled="players.result.value.meta?.current_page === 1"
            data-testid="previous-button">
            previous
          </button>
        </div>
        <div class="column m-1">
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

    </div>
    <div v-else>
      <p class="heading">
        No match with "{{ previousSearchText }}"
      </p>
    </div>

  </div>

  <div class="block"></div>
  <div class="block"></div>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { UseRequest } from '@/utils/useRequest'
import { getAllPlayers } from '@/api/api'
import { getAllPlayersParamType } from '@/types/api'

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

    const searchText = ref<string>('')
    const previousSearchText = ref<string>('')
    const page = ref<number>(1)
    const players = new UseRequest(getAllPlayers)

    const search: (page?: number) => void = (page = 1): void => {
      console.log(page)

      if (!searchText.value.length) return

      players.createRequest<getAllPlayersParamType>({
        search: searchText.value,
        page: page
      })
      .then(() => {
        page = players.result.value.meta.current_page
      })
      .then(() => {
        previousSearchText.value = searchText.value
      })
    }

    watch(page, () => search(page.value))

    const blurTitle = 'Search the stats of NBA players'
    const focusTitle = 'Which player do you want to know about ?'
    const searchTextParagraph = ref<string>(blurTitle)
    const focus = () => searchTextParagraph.value = focusTitle
    const blur = () => searchTextParagraph.value = blurTitle

    return {
      searchTextParagraph,
      searchText,
      previousSearchText,
      page,
      search,
      players,
      focus,
      blur
    }
  }
});
</script>

<style scoped>
</style>
