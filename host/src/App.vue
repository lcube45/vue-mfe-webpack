<script setup>
import Header from "team_blue/Header"
import Navigation from "./components/Navigation.vue"
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const drawer = ref(null)
</script>

<style>
.mycenter {
  text-align: center;
  border-bottom: 1px solid #ccc;
}
</style>

<template>
  <v-app>
    <Navigation />
    <v-main>
      <RouterView />
      <div class="container">
        <div><strong>Count: {{ count }}</strong></div>
        <div><v-btn v-on:click="addOne" size="x-large">Add one</v-btn></div>
      </div>
    </v-main>
  </v-app>


</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    addOne() {
      this.$store.commit('addOne')
    }
  }
}
</script>