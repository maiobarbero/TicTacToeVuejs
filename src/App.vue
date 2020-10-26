<template>
  <div id="app">
    <Grid class="grid" />
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";
export default {
  name: "App",
  components: {
    Grid,
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
