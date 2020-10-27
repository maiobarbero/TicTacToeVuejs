<template>
  <div class="btn" @click="onClick">Restart</div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
