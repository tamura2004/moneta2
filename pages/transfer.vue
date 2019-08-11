<template>
  <div>
    <v-list class="elevation-6">
      <v-subheader class="header">振込元</v-subheader>
      <v-list-item two-lines>
        <v-list-item-content>
          <v-list-item-title>
            <v-layout>
              <v-flex xs6>目黒銀行</v-flex>
              <v-flex xs6>祐天寺支店</v-flex>
            </v-layout>
          </v-list-item-title>
          <v-list-item-title>
            <v-layout>
              <v-flex xs2>普通</v-flex>
              <v-flex xs4>0123456</v-flex>
              <v-flex xs2>残高</v-flex>
              <v-flex xs4>￥1,000,000-</v-flex>
            </v-layout>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-subheader class="header">振込先</v-subheader>
      <v-list-item two-lines>
        <v-list-item-content>
          <v-list-item-title>
            <v-layout>
              <v-flex xs6>{{ (b = bank(bankId)) ? b.name : "-" }}</v-flex>
              <v-flex xs6>祐天寺支店</v-flex>
            </v-layout>
          </v-list-item-title>
          <v-list-item-title>
            <v-layout>
              <v-flex xs2>普通</v-flex>
              <v-flex xs4>0123456</v-flex>
              <v-flex xs2>振込金額</v-flex>
              <v-flex xs4>￥1,000,000-</v-flex>
            </v-layout>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('banks', ['bank']),
    ...mapGetters('transfer', ['bankId']),
  }  
}
</script>

