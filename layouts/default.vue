<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon>
        <nuxt-link to="/" tag="div">
          <v-icon>mdi-home</v-icon>
        </nuxt-link>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <p class="body-1 my-0">目黒銀行</p>
        <p class="body-1 my-0">祐天寺支店</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn nuxt to="login" text>赤城　一郎様</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout align-start justify-center>
          <v-flex xs12 sm12 md8 xl8>
            <transition name="router" mode="out-in">
              <nuxt/>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
