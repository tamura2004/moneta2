<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込金額を入力して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          name="金額"
          label="金額"
          type="number"
          :value="amount"
          :rules="[v => v < 1000 || '残高が不足しています']"
          @input="$store.commit('transfer/amount', $event)"
        ></v-text-field>
        <v-btn
          nuxt
          dark
          to="/"
          color="primary"
          :disabled="!amount"
        >次へ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: ['hasBank', 'hasBranch', 'hasAccount'],
  data: {
    valid: true,
  },
  computed: {
    ...mapGetters('transfer', ['bankId', 'branchId', 'accountId', 'amount']),
  }
}
</script>
