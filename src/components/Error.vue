<template>
  <div v-if="loading">
    <h1>Error</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    error: Boolean
  }
})
</script>
