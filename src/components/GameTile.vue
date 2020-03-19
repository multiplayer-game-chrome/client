<template>
  <div class="col-4 px-0" id="tictactoe-tile" @click="sendCoordinate">
    <div class="card">
      <div
        class="card-body mx-auto d-flex align-items-center justify-content-center"
        id="card-body"
      >
        <!-- <h1>[{{ x }} , {{ y }}]</h1> -->
        <h1>X</h1>
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

<style scoped>
#tictactoe-tile {
  cursor: pointer;
  border: #ffa372 2px solid;
}

#card-body {
  height: 250px;
  width: 250px;
}

h1 {
  font-size: 250px;
}
</style>
