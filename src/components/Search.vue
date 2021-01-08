<template>
  <input type="search" v-model="searchText">
  <button @click="search()">search</button>
  <p>{{ searchText }}</p>

  <p>{{ players.result.value }}</p>
  <p>loading : {{ players.loading.value }}</p>
  <p>error : {{ players.error.value }}</p>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { searchPlayers } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  setup() {
    const searchText = ref<string>('')
    const players = useRequest(searchPlayers)

    const search = () => {
      players.createRequest(searchText.value).then(() => console.log(players.result.value) )
    }
    
    return {
      searchText,
      search,
      players
    }
  }
});
</script>

<style scoped>
</style>
