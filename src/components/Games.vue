<template>
  <div>
    <p>min : {{ min }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getStats } from "../api/api"

export default defineComponent({
  setup() {
    const min = ref<number>(0)
    getStats({
        'player_ids[]': 666609
      }).then(response => {
        min.value = response.data[0].min
      })
    
    return {
      min
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
