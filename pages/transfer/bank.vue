<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先銀行を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select v-model="bankId" :items="banks" item-text="name" item-value="id"></v-select>
        <v-btn nuxt to="branch" color="primary" dark>次へ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FirebaseListener } from '~/plugins/firebase.js';

export default {
  data() {
    return ({
      bankId: null,
    });
  },
};
</script>
