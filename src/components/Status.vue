<template>
  <div class="status">
    <span v-if="winner">{{ winner }} is the winner!!!</span>
    <span v-else-if="isDraw">Draw</span>
    <span v-else>{{ player }}'s turn</span>
  </div>
</template>

<script>
export default {
  props: {
    winner: String,
    player: String,
    isDraw: Boolean,
  },
};
</script>

<style></style>
