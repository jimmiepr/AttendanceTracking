<template>
  <v-container fluid>
    <v-row justify="center" class="mt-5" align="center">
      <v-card width="400">
        <div class="text-center">
          <h1>{{ !TimeLB? "00:00:00" : TimeLB }}</h1>
        </div>
        <div class="ma-5">
          <v-btn
            @click="isCheckIn = !isCheckIn"
            height="180"
            width="180"
            :color="isCheckIn ? 'inherit' : 'yellow'"
            :disabled="isCheckIn"
            >Check-in</v-btn
          >
          <v-btn
            @click="isCheckIn = !isCheckIn"
            height="180"
            width="180"
            :color="isCheckIn ? 'yellow' : 'inherit'"
            :disabled="!isCheckIn"
            >Check-Out</v-btn
          >
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.getTime();
  },
  data() {
    return {
      TimeLB: "",
      isCheckIn: false,
    };
  },
  methods: {
    getTime() {
      setInterval(() => {
        let dt = new Date();
        this.TimeLB = dt.toLocaleTimeString();
      }, 1000);
    },
  },
};
</script>

<style>
</style>