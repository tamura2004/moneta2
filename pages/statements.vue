<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>入出金明細</v-toolbar-title>
    </v-toolbar>
    <v-list-item two-line v-for="statement in statements" :key="statement.id">
      <v-list-item-content>
        <v-list-item-title>
          <v-layout>
            <v-flex xs4>2019-08-31</v-flex>
            <v-flex xs8>振込 赤川</v-flex>
          </v-layout>
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-layout>
            <v-flex xs4>入金</v-flex>
            <v-flex xs4>{{ statement.amount | yen }}</v-flex>
            <v-flex xs4>{{ statement.total | yen }}</v-flex>
          </v-layout>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: 'login',
  filters: {
    yen: v => (v && v.total) ? '￥' + v.total.toLocaleString() + '-' : '----',
    num: v => (v && v.num) ? v.num : '----',
    kind: v => (v && v.kind) ? v.kind : '----',
  },
  computed: {
    ...mapGetters('login', ['statements']),
  }
}
</script>
