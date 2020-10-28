<template>
  <div>
    <Status :winner="winner.player" :player="player" :isDraw="isDraw" />

    <Reset
      v-if="winner.player === 'X' || winner.player === 'O'"
      class="btn"
      @click="newGame"
    />

    <Reset v-else-if="isDraw" class="btn" @click="newGame" />

    <Reset v-else class="btn btn-off" />

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
import Reset from "./Reset";
import Winner from "../winnerFormula";

export default {
  components: {
    Square,
    Status,
    Reset,
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
      } else if (this.winner.player === "X" || this.winner.player === "O") {
        return;
      }
      this.$set(this.squares, position, this.player);
      this.player = this.player === "X" ? "O" : "X";
    },
    newGame() {
      this.squares = Array(9).fill(null);
      this.player = "X";
    },
  },
};
</script>
