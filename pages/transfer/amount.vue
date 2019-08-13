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
          :rules="[v => v < loginAccount.total - fee || '残高が不足しています']"
          @input="$store.commit('transfer/amount', $event)"
        ></v-text-field>
        <v-btn
          nuxt
          dark
          color="primary"
          :disabled="!amount"
          @click="transfer"
        >振込実行</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: ['hasBank', 'hasBranch', 'hasAccount'],
  data: () => ({
    valid: true,
  }),
  computed: {
    ...mapGetters('transfer', ['accountId', 'account', 'amount', 'fee']),
    ...mapGetters('login', {
      loginAccount: 'account',
    }),
  },
  methods: {
    transfer() {
      this.$store.dispatch('login/transfer');
      this.$store.dispatch('transfer/transfer');
    },
    transferFrom() {
      const id = this.loginAccount.id;
      const total = this.loginAccount.total;

      this.$store.dispatch('accounts/modify', {
        id: this.loginAccount.id,
        data: {
          total: total - this.amount - this.fee,
        },
      });

      this.$store.dispatch('statements/add', {
        data: {
          accountId: id,
          amount: this.amount,
          total: total - this.amount,
          kind: '出金',
          memo: `振込：${this.account.name}`,
        },
      });
      this.$store.dispatch('statements/add', {
        data: {
          accountId: id,
          amount: this.fee,
          total: total - this.amount - this.fee,
          kind: '出金',
          memo: '振込手数料',
        },
      });
    },
    transferTo() {
      const id = this.accountId;
      const total = Number(this.account.total);

      this.$store.dispatch('accounts/modify', {
        id,
        data: {
          total: total + this.amount,
        },
      });
      this.$store.dispatch('statements/add', {
        data: {
          accountId: id,
          amount: this.amount,
          total: total + this.amount,
          kind: '入金',
          memo: `振込：${this.loginAccount.name}`,
        },
      });
    }
  },
}
</script>
