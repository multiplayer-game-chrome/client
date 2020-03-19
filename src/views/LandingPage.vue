<template>
  <div id="login-page">
    <div class="modal-dialog text-center">
      <div class="col-sm-9 main-section">
        <div class="modal-content">
          <!-- <i class="far fa-user-circle"></i> -->
          <div class="col-12 user-img">
            <img src="../assets/icon.png" />
          </div>
          <div class="col-12 form-input">
            <form>
              <div class="form-group">
                <input v-model="username" type="text" class="form-control" placeholder="Enter Username" required/>
              </div>
              <button type="submit" class="btn btn-success">PLAY</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data: {

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#login-page {
  width: 100vw;
  height: 100vh;
}

.main-section {
  margin: 0 auto;
  margin-top: 200px;
  padding: 0;
}

.modal-content {
  background-color: #1b262c;
  opacity: 0.7;
  padding: 0 18px;
  border-radius: 20px;
}

.user-img img {
  height: 130px;
  width: 130px;
}

.user-img {
  margin-top: -60px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group input {
  height: 42px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  letter-spacing: 2px;
}

.form-input button {
  width: 40%;
  margin: 5px 0 25px;
}

.btn-success {
  background-color: #ca2103;
  border-color: #ca2103;
  font-size: 19px;
  border-radius: 5px;
  padding: 7px 14px;
}

.btn-success:hover {
  background-color: #f3d427;
}
</style>
