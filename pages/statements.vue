<template>
  <v-card>
    <v-toolbar color="primary" dark dense>
      <v-toolbar-title>入出金明細</v-toolbar-title>
    </v-toolbar>
    <template v-for="statement in statements">
      <v-list-item two-line :key="statement.id">
        <v-list-item-content>
          <v-list-item-title>
            <v-layout>
              <v-flex xs4>{{ statement.timestamp | date }}</v-flex>
              <v-flex xs8>{{ statement.memo }}</v-flex>
            </v-layout>
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-layout>
              <v-flex xs4>{{ statement.kind }}</v-flex>
              <v-flex xs4>{{ statement.amount | yen }}</v-flex>
              <v-flex xs4>{{ statement.total | yen }}</v-flex>
            </v-layout>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="'div' + statement.id"></v-divider>
    </template>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "login",
  filters: {
    yen: v => (v ? "￥" + v.toLocaleString() + "-" : "----"),
    kind: v => (v && v.kind ? v.kind : "----"),
    date: v =>
      v && v.toDate
        ? v
            .toDate()
            .toISOString()
            .substr(0, 10)
        : "----"
  },
  computed: {
    ...mapGetters("login", ["statements"])
  }
};
</script>
