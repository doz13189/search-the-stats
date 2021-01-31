<template>
  <span>
    <slot v-bind:user="user">{{ user.lastName }}</slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data () {
    return {
      user: {
        firstName: 't',
        lastName: 'k'
      }
    }
  }
})
</script>


