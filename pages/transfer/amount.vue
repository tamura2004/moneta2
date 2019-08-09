<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込金額を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select></v-select>
        <v-btn nuxt to="/" color="primary" dark>次へ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
