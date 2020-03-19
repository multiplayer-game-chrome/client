<template>
  <div class="col-4 px-0" id="tictactoe-tile" @click="sendCoordinate">
    <div class="card">
      <div class="card-body">
        <h1>{{value}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GameTile',
  props: ['index'],
  data () {
    return {
      value: ''
    }
  },
  computed: {
    y: function () {
      return this.index % 3
    },
    x: function () {
      return Math.floor(this.index / 3)
    },
    ...mapState(['board'])
  },
  methods: {
    sendCoordinate () {
      this.$emit('mark-server', {
        value: this.$store.state.mark,
        x: this.x,
        y: this.y
      })
    }
  },
  watch: {
    board () {
      const val = this.board[this.x][this.y]
      this.value = val === 'z' ? '' : val
    }
  }
}
</script>

<style>
#tictactoe-tile {
  width: 100%;
  cursor: pointer;
}
</style>
