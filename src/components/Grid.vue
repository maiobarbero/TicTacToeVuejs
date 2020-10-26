<template>
  <div>
    <Status :winner="winner.player" :player="player" :isDraw="isDraw" />
    <div class="boardGame">
      <Square
        v-for="(squareValue, position) in squares"
        :key="position"
        :value="squareValue"
        @click="squareClicked(position)"
      />
    </div>
  </div>
</template>

<script>
import Square from "./Square";
import Status from "./Status";
import Winner from "../winnerFormula";

export default {
  components: {
    Square,
    Status,
  },
  data() {
    return {
      player: "X",
      squares: Array(9).fill(null),
    };
  },
  computed: {
    winner() {
      return Winner(this.squares);
    },
    isDraw() {
      return this.squares.filter((square) => !square).length === 0;
    },
  },
  methods: {
    squareClicked(position) {
      if (this.squares[position]) {
        return;
      }
      this.$set(this.squares, position, this.player);
      this.player = this.player === "X" ? "O" : "X";
    },
  },
};
</script>
