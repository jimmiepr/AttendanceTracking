<template>
  <v-menu v-model="fromDateMenu" :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <v-text-field
        :label="text"
        prepend-inner-icon="event"
        readonly
        outlined
        :value="fromDateDisp"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      locale="en-in"
      :min="minDate"
      :max="maxDate"
      v-model="fromDateVal"
      no-title
      @input="sendDate"
    ></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  props: ["text"],
  data() {
    return {
      fromDateMenu: false,
      fromDateVal: null,

      minDate: "1999-01-01",
      maxDate: this.dateTime,
    };
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
      // format date, apply validations, etc. Example below.
      // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    },
    dateTime() {
      let dt = new Date();
      return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
    },
  },
  methods: {
    sendDate() {
      this.fromDateMenu = false;
      this.$emit("getBD", this.fromDateDisp);
    },
  },
};
</script>

<style scoped>
</style>
