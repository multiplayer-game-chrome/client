<template>
  <div id="game-page">
    <GameBoard> </GameBoard>
  </div>
</template>

<script>
import GameBoard from '../components/GameBoard'
export default {
  name: 'GamePage',
  components: {
    GameBoard
  }
}
</script>

<style scoped>
#game-page {
  background-color: pink;
  height: 100vh;
  width: 100wh;
}
</style>
