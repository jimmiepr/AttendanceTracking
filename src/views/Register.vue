<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-card width="700">
        <h1 class="textHead">Register</h1>
        <br />
        <v-card-text>
          <v-form @submit.prevent="onSubmit">
            <v-row>
              <v-col>
                <v-text-field
                  label="First name"
                  v-model="account.firstName"
                  auto-grow
                  outlined
                />
              </v-col>
              <v-col>
                <v-text-field
                  label="Last name"
                  v-model="account.lastName"
                  auto-grow
                  outlined
                />
              </v-col>
            </v-row>
            <v-text-field
              label="Username"
              v-model="account.username"
              auto-grow
              outlined
            />
            <v-row>
              <v-col>
                <v-text-field
                  :type="isShowPassword ? 'text' : 'password'"
                  label="Password"
                  v-model="account.password"
                  auto-grow
                  outlined
                  :append-icon="
                    isShowPassword ? 'visibility' : 'visibility_off'
                  "
                  @click:append="isShowPassword = !isShowPassword"
                />
              </v-col>
              <v-col>
                <v-text-field
                  :type="isShowPassword ? 'text' : 'password'"
                  label="Confirm-password"
                  v-model="account.confirm"
                  auto-grow
                  outlined
                  :append-icon="
                    isShowPassword ? 'visibility' : 'visibility_off'
                  "
                  @click:append="isShowPassword = !isShowPassword"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="E-mail"
                  v-model="account.email"
                  type="email"
                  auto-grow
                  outlined
                />
              </v-col>
              <v-col>
                <v-text-field
                  label="Tel."
                  v-model="account.tel"
                  type="tel"
                  auto-grow
                  outlined
                  counter="10"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <DateTimePicker @getBD="GET_BD" text="Birthday" />
              </v-col>
              <v-col>
                <v-text-field
                  label="Age"
                  v-model="account.age"
                  type="number"
                  auto-grow
                  outlined
                />
              </v-col>
            </v-row>
            <v-row class="justify-space-between">
              <v-btn text class="ma-2" @click="$router.back()">back</v-btn>
              <v-btn type="submit" class="ma-2" color="yellow">Comfirm</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import api from '@/services/api';

import DateTimePicker from "@/components/DateTimePicker/DateTimePicker";
export default {
  name: "Register",
  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: "",
        confirm: "",
        email: "",
        age: 18,
        dateBorn: "",
        tel: "",
        firstName: "",
        lastName: "",
      },
    };
  },
  components: {
    DateTimePicker,
  },
  methods: {
    GET_BD(child) {
      this.account.dateBorn = child;
    },
    async onSubmit() {
        await api.register(this.account)
    }
  },
};
</script>

<style scoped>
.textHead {
  text-align: center;
  text-transform: uppercase;
}
</style>