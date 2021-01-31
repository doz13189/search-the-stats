<template>

  <Slot></Slot>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Slot from "@/sandbox/slot/Slot.vue";

export default defineComponent({
  components: {
    Slot
  },
  // setup() {
  // }
});
</script>

<style scoped>
</style>
