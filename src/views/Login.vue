<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-card width="400">
        <h1 class="textHead">Attendance</h1><br/>
        <h3 class="textSub">App Tracking</h3>
        <v-card-text>
          <v-form>
            <v-text-field label="Username" />
            <v-text-field label="Password" />
            <v-row class="mb-3 px-5" justify="end">
              <span>Forgot password?</span>
              <br />
            </v-row>
            <v-row class="justify-space-between">
              <v-btn text class="ma-2">register</v-btn>
              <v-btn class="ma-2" color="yellow">login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
.textHead {
  display: inline;
  justify-self: center;
  font-size: 50px;
  padding-left: 40px;
  margin-bottom: 0;
  text-transform: uppercase;
}
.textSub {
  display: inline;
  padding-left: 250px;
  font-weight: 400;
  margin-top: 0;
}
</style>