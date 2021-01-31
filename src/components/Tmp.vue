<template>
  <p>tmp</p>
  <a v-bind:href="url">
    <slot></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
  }
})
</script>
