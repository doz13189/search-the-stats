<template>
  <div v-if="loading">
    <div class="columns">
      <div class="column"></div>
      <div class="column"><progress class="progress is-small is-primary" max="100"></progress></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    loading: Boolean
  }
})
</script>