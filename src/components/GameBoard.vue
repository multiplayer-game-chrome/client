<template>
  <div
    class="container d-flex align-items-center justify-content-center"
    id="game-board"
  >
    <div class="row">
      <GameTile
        v-for="(letter, i) in sampleText"
        :key="i"
        :index="i"
        @mark-server="mark"
      ></GameTile>
    </div>
  </div>
</template>

<script>
import GameTile from '../components/GameTile'
import io from '../config/config'
export default {
  name: 'GameBoard',
  components: {
    GameTile
  },
  data () {
    return {
      sampleText: '123456789', // this is used to loop the tile 9 times to make 3 x 3 board
      socket: {} // this is the socket that is imported from config
    }
  },
  methods: {
    mark (payload) {
      console.log('This actually works now :', payload)
      this.socket.emit('mark', payload)
    }
  },
  created () {
    this.socket = io
  }
}
</script>

<style>
#game-board {
  height: 100%;
}
</style>
