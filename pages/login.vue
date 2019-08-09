<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>ログイン</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select></v-select>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn nuxt to="/signin" color="success">口座開設</v-btn>
      <v-btn nuxt to="/" color="primary">ログイン</v-btn>
    </v-card-actions>
  </v-card>
</template>
