<template>
  <v-navigation-drawer color="#f5f5f5" permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Attendance </v-list-item-title>
        <v-list-item-subtitle> App tracking </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item-group mandatory v-model="selectedMenu">
        <v-list-item
          v-for="([ title, icon, route], index) in menus"
          :key="index"
          link
          @click="onClickMenu(route)"
        >
          <v-list-item-icon class="tile">
            <v-icon >{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="tile">{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["Check-in", "mdi-view-dashboard", "/check-in"],
        ["Report", "assignment", "/report"],
        ["Your petition", "mdi-forum", "/petition"],
      ],
    };
  },
  methods: {
    onClickMenu(route) {
      this.$router.push(route).catch(() => {});
    },
  },
  mounted() {
      this.selectedMenu = this.menus.findIndex(menu => menu[2] == this.$route.path) 
  },
  watch: {
      $route(to){
         this.selectedMenu = this.menus.findIndex(menu => menu[2] == to.path) 
      }
  },
};
</script>

<style scoped>
.tile{
  color: black;
}
</style>