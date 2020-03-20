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
      console.log(this.$store.state.playerId)
      console.log(this.$store.state.isActive)
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
      if (this.value !== 'X' && this.value !== 'O') {
        console.log('success 1')
        if (this.$store.state.playerId === 1 || this.$store.state.playerId === 2) {
          console.log('success 2')
          if (this.$store.state.isActive) {
            console.log('success 3')
            this.$emit('mark-server', {
              value: this.$store.state.mark,
              x: this.x,
              y: this.y
            })
          } else {
            // not your turn bitch
          }
        } else {
          // u r spectator idiot!
        }
      } else {
        // error r u idiot? u cant replace it bitch
      }
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
