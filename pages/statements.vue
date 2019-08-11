<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>入出金明細</v-toolbar-title>
    </v-toolbar>
    <v-list-item two-line>
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
            <v-flex xs4>100,000</v-flex>
            <v-flex xs4>1,100,000</v-flex>
          </v-layout>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item two-line>
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
            <v-flex xs4>100,000</v-flex>
            <v-flex xs4>1,100,000</v-flex>
          </v-layout>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: 'login',
  computed: {
    ...mapGetters('banks', ['bank']),
    ...mapGetters('transfer', ['bankId']),
  }  
}
</script>
