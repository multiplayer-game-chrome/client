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
        :content="letter"
        @mark-server="mark"
      ></GameTile>
    </div>
  </div>
</template>

<script>
import GameTile from '../components/GameTile'
import io from '../config/config'
import Swal from 'sweetalert2'
import { mapState } from 'vuex'

export default {
  name: 'GameBoard',
  components: {
    GameTile
  },
  data () {
    return {
      sampleText: '123456789', // this is used to loop the tile 9 times to make 3 x 3 board
      socket: {} // this is the socket that is imported from config,
    }
  },
  computed: {
    ...mapState(['winner'])
  },
  methods: {
    mark (payload) {
      this.socket.emit('mark', payload)
    },
    onWinGame () {
      Swal.fire({
        title: 'You Win!',
        html: `
        <lottie-player
          src="https://assets2.lottiefiles.com/datafiles/VtCIGqDsiVwFPNM/data.json"
          background="transparent"
          speed="1"
          style="width: 300px; height: 300px;"
          loop autoplay
        >
        </lottie-player>
        `,
        confirmButtonText: 'Close',
        timer: 2000
      })
    },
    onLoseGame () {
      Swal.fire({
        title: 'You Lose 😢',
        html: `
        <lottie-player
            src="https://assets6.lottiefiles.com/private_files/lf30_A1MWbl.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px;"
            loop
            autoplay
        >
        </lottie-player>
        `,
        confirmButtonText: 'Close',
        timer: 2000
      })
    }
  },
  watch: {
    winner () {
      // if winner is current player then call onWinGame
      if (this.winner === 'X') {
        this.onWinGame()
      } else {
        this.onLoseGame()
      }
    }
  },
  created () {
    this.socket = io
    this.socket.emit('get-board-state')
    this.socket.on('update-board', (payload) => {
      this.$store.commit('SET_BOARD', payload.board)
      if (payload.winner !== '') this.$store.commit('SET_WINNER', payload.winner)
    })
  }
}
</script>

<style>
#game-board {
  height: 100%;
}
</style>
