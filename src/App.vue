<template>
  
  <Players msg="Welcome to Your Vue.js + TypeScript App" />
  <Games/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Players from "./components/Players.vue";
import Games from "./components/Games.vue";

export default defineComponent({
  components: {
    Players,
    Games
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
