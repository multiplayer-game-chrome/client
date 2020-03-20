<template>
  <div id="game-page">
    <div id="left">
      <div class="card px-0" style="width:250px">
        <img
          class="card-img-top p-3"
          src="https://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png"
          alt="Card image"
        />
        <div class="card-body p-0 pt-3">
          <button
            href="javascript:;"
            class="btn btn-outline-primary btn-block username-button"
            disabled
          >
            {{turn.left}}
          </button>
          <button
            href="javascript:;"
            class="btn btn-primary btn-block"
            disabled
          >
            PLAYER 1
          </button>
        </div>
      </div>
    </div>
    <GameBoard> </GameBoard>
    <div id="right">
      <div class="card px-0" style="width:250px">
        <img
          class="card-img-top p-3"
          src="https://www.freeiconspng.com/uploads/blue-circle-png-5.png"
          alt="Card image"
        />
        <div class="card-body p-0 pt-3">
          <button
            href="javascript:;"
            class="btn btn-outline-danger btn-block username-button"
            disabled
          >
            {{turn.right}}
          </button>
          <button href="javascript:;" class="btn btn-danger btn-block" disabled>
            PLAYER 2
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameBoard from '../components/GameBoard'
export default {
  name: 'GamePage',
  components: {
    GameBoard
  },
  computed: {
    isYourTurn () {
      if (this.$store.state.isActive && (this.$store.state.playerId === 1 || this.$store.state.playerId === 2)) {
        return true
      } else {
        return false
      }
    },
    turn () {
      if (this.$store.state.playerId === 1) {
        if (this.$store.state.isActive && this.$store.state.playerId === 1) {
          return { left: 'Your Turn', right: 'Wait' }
        } else {
          return { right: 'Enemy Turn', left: 'Wait' }
        }
      } else if (this.$store.state.playerId === 2) {
        if (this.$store.state.isActive && this.$store.state.playerId === 2) {
          return { right: 'Your Turn', left: 'Wait' }
        } else {
          return { left: 'Enemy Turn', right: 'Wait' }
        }
      } else {
        return { right: '', left: '' }
      }
    },
    getRight () {
      if (this.$store.state.isActive && this.$store.state.playerId === 2) {
        return 'Your Turn'
      } else {
        return 'Wait'
      }
    }
  }
}
</script>

<style scoped>
#game-page {
  background-color: #1b262c;
  height: 100vh;
  width: 100wh;
  display: flex;
}

#left {
  background-color: #0f4c81;
  width: 30%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#right {
  background-color: #ed6663;
  width: 30%;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.username-button {
  font-size: 30px;
}
</style>
