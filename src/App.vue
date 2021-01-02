<template>
  <v-app>
    <Header v-if="$store.getters.GET_IS_LOGIN" />
    <Menu v-if="$store.getters.GET_IS_LOGIN" />
    <Content />
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