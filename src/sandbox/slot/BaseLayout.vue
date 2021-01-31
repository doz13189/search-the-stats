<template>
  <div>

    <!-- <a
      v-bind:href="url"
      class="nav-link"
    >{{ Boolean(url) }}</a> -->

    <header>
      <slot name="header"></slot>
    </header>

    <main name="default">
      <slot v-bind:user="user">
        {{ user }}
      </slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // props: {
  //   url: String
  // }
})
</script>
