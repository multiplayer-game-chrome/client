<template>
  <div class="col-4 px-0" id="tictactoe-tile" @click="sendCoordinate">
    <div class="card">
      <div class="card-body">
        <h1>[{{ x }} , {{ y }}]</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameTile',
  props: ['index'],
  computed: {
    x: function () {
      return this.index % 3
    },
    y: function () {
      return Math.floor(this.index / 3)
    }
  },
  methods: {
    sendCoordinate () {
      this.$emit('mark-server', {
        value: this.$store.state.mark,
        x: this.x,
        y: this.y
      })
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
