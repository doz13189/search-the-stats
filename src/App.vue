<template>

  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Go Wizards
        </h1>
        <h2 class="subtitle">
          Search the stats of NBA players
        </h2>
      </div>
    </div>
  </section>

  <router-view />

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Created by <a href="https://github.com/doz13189/rui-vue3">doz13189</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {
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
