<template>
  <dir>
    <h1>This is the Landing Page</h1>
    <form @submit.prevent="enterUsername">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="enter username"
          v-model="username"
        />
        <input type="submit" class="btn btn-primary mt-3" />
      </div>
    </form>
  </dir>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      username: null
    }
  },
  methods: {
    enterUsername () {
      this.$store.commit('SET_USERNAME', this.username)
      this.$router.push({ name: 'GamePage' })
    }
  }
}
</script>

<style></style>
