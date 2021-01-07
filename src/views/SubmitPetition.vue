<template>
  <v-container fluid full-heigut>
    <v-row justify="center" class="ma-5">
      <v-form>
        <v-card class="pa-5" width="400">
            <h2 class="text-center">Submit a petition</h2><br>
          <v-text-field outlined label="Date" />
          <v-text-field outlined label="Check-in" />
          <v-text-field outlined label="Check-out" />
          <v-textarea outlined label="Reason" />
          <v-row class="justify-space-between">
            <v-btn text @click="$router.back()">Submit</v-btn>
            <v-btn type="submit" class="yellow">Submit</v-btn>
          </v-row>
        </v-card>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    
  },
  data() {
    return {
      date:"",
      checkIn:"",
      checkOut:"",
      reason:""
    }
  },
};
</script>

<style>
</style>