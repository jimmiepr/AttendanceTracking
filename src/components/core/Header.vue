<template>
  <div>
    <v-app-bar app light permanent>
      <v-btn text @click="toggleMenu">
        <v-icon>toc</v-icon>
      </v-btn>
      <v-spacer />
      <v-divider vertical inset />
      <v-btn text @click="logOut">
        logout
        <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logOut() {
      this.$store.dispatch({
        type: "DO_LOGOUT",
      });
    },
    toggleMenu() {
      this.$store.dispatch({
        type: "TOGGLE_MENU",
      });
    },
  },
};
</script>

<style>
</style>