<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center" >
    <v-card width="400px ">
     <div class="ma-5">
        <p>
        Forgot your account’s password or having trouble logging into your Team?
        Enter your email address and we’ll send you a recovery link.
      </p>
      <v-form>
          <h3>Email</h3>
          <v-text-field outlined type="email" />
          <v-row class="justify-space-between mb-3">
            <v-btn text @click="$router.back()">back</v-btn>
          <v-btn color="yellow" type="submit" >Send recovery email</v-btn>
          </v-row>
      </v-form>
     </div>
    </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>