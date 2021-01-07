<template>
  <v-container>
    <v-layout row wrap fill-height>
      <v-card width="100%" class="ma-5">
        <v-row justify="center" align="center" class="ma-5">
          <v-col cols="4" md="4" sm="6">
            <DateTimePicker text="From Date" />
          </v-col>
          <v-col cols="4" md="4" sm="6">
            <DateTimePicker text="To Date" />
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <v-row> </v-row>
            <v-btn block color="yellow">Query</v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-row justify="center">
          <v-data-table caption="Data report" :headers="header" :items="item">
              <template v-slot:item="row">
                  <tr>
                      <td>{{row.item.date}}</td>
                      <td>{{row.item.checkIn}}</td>
                      <td>{{row.item.checkOut}}</td>
                      <td class="text-center">
                          <v-btn icon @click="onClickPetition(row.item)">
                              <v-icon>mdi-pen</v-icon>
                          </v-btn>
                      </td>
                  </tr>
              </template>
          </v-data-table>
      </v-row >
    </v-layout>
  </v-container>
</template>

<script>
import DateTimePicker from "@/components/DateTimePicker/DateTimePicker";
export default {
  name: "Report",
  components: {
    DateTimePicker,
  },
  data() {
    return {
      header: [
        { text: "Date", value: "date" },
        { text: "Check-in", value: "checkIn" },
        { text: "Check-out", value: "checkOut" },
        { text: "Submit a petition", value: "subPetition" },
      ],
      item: [
          {
              id: 1,
              date: "2020-12-1",
              checkIn: "8.30 AM",
              checkOut: "17.30 AM",
          },
          {
              id: 2,
              date: "2020-12-2",
              checkIn: "8.15 AM",
              checkOut: "17.30 AM",
          }
      ]
    };
  },
  methods: {
    onClickPetition(item){
      this.$router.push(`/submit-petition/${item.id}`)
    }
  },
};
</script>

<style>
</style>