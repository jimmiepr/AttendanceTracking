<template>
  <v-app>
    <Header />
    <Menu />
    <v-main>
      <Content />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/core/Header";
import Menu from "@/components/core/Menu";
import Content from "@/components/core/Content";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content,
  },
};
</script>

<style>
</style>