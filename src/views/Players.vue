<template>
  <!-- <button @click="page--">previous</button>
  <button @click="page++">next</button>
  <p>page : {{ page }}</p> -->
  <p>current_page : {{ results.result.value.meta?.current_page }}</p>
  <p>total page : {{ results.result.value.meta?.total_pages }}</p>
  <p>{{ results.result.value.meta }}</p>

  <tr v-for="player in results.result.value.data"
      :key="player.id"
      >
    <td>
      <!-- <button @click="playerId = player.id">detail</button> -->
      <router-link to="/stats">Stats</router-link>
    </td>
    <td>
      {{ player }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';

export default defineComponent({
  props: {
    result: Object
  },
  setup(props) {
    let results: any = {};
    watch(props, () => {
      results = props.result
    })
    return {
      results
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>