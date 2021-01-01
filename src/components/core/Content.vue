<template>
  <v-content class="bg">
      <v-fab-transition >
          <router-view />
      </v-fab-transition>
  </v-content>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg{
    background-color: darkslategray;
    height: 100%;
}
</style>