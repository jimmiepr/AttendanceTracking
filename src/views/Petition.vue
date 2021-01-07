<template>
  <v-container fluid>
    <v-layout fill-height row>
      <v-row justify="center">
        <v-card class="ma-5">
          <v-data-table :headers="header" :items="item"> 
              <template v-slot:item="row">
                  <tr>
                      <td>{{row.item.number}}</td>
                      <td>{{row.item.date}}</td>
                      <td>{{row.item.result}}</td>
                      <td>
                          <v-btn icon color="error">
                              <v-icon>delete</v-icon>
                          </v-btn>
                      </td>
                  </tr>
              </template>
          </v-data-table>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      header: [
        { text: "NO", value: "number" },
        { text: "Date", value: "date" },
        { text: "Result", value: "result" },
        { text: "Remove", value: "remove"}
      ],
      item: [{ number: 1, date: "2020-12-1", result: "Wait for apporve" }],
    };
  },
};
</script>

<style>
</style>