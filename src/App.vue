<template>
  <Search/>

  <!-- <Players/> -->
  <!-- <Games/>
  <SpecificGame/> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "./components/Search.vue";
// import Players from "./components/Players.vue";
// import Games from "./components/Games.vue";
// import SpecificGame from "./components/SpecificGame.vue";

export default defineComponent({
  components: {
    Search
    // Players,
    // Games,
    // SpecificGame
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
