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
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

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
      if (this.$store.state.playerId === 1 || this.$store.state.playerId === 2) {
        console.log('success 1')
        console.log('success 2')
        if (this.value !== 'X' && this.value !== 'O') {
          if (this.$store.state.isActive) {
            console.log('success 3')
            this.$emit('mark-server', {
              value: this.$store.state.mark,
              x: this.x,
              y: this.y
            })
          } else {
            // not your turn bitch
            Toast.fire({
              icon: 'error',
              title: 'Not your turn'
            })
          }
        } else {
          // u r spectator idiot!
          Toast.fire({
            icon: 'error',
            title: 'You can\'t replace it'
          })
        }
      } else {
        // error r u idiot? u cant replace it bitch
        Toast.fire({
          icon: 'error',
          // title: 'You can\'t replace it'
          title: 'You are not player'
        })
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
  width: 250px;
  height: 250px;
  display: flex;
}

.card {
  height: 100%;
  width: 100%;
}

h1 {
  font-size: 250px;
}
</style>
