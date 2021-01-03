<template>
  <div>

    <p>min : {{ stats.result.value.data }}</p>
    <p>loading : {{ stats.loading.value }}</p>
    <p>error : {{ stats.error.value }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getStats } from '../api/api'
import { useRequest } from '../utils/useRequest'

export default defineComponent({
  setup() {
    const stats = useRequest(getStats)
    stats.createRequest({
        'player_ids[]': 666609
    })

    return {
      stats
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
