<template>
  <div>
    <v-app-bar app>
      <h1>Username : {{$store.getters.GET_USERNAME | capitalize}}</h1>
      <v-spacer />
      <v-divider vertical inset/>
      <v-btn text>
          logout
          <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>