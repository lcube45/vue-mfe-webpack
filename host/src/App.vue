<script setup>
import Header from "team_blue/Header"
import { ref } from 'vue'

const drawer = ref(null)
</script>

<template>
      <div class="container">
        <Header />
        <div>Name: host</div>
        <div>Framework: vue3</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        <hr />
        <div><strong>Count: {{ count }}</strong></div>
        <div><v-btn v-on:click="addOne" size="x-large">Add one</v-btn></div>
      </div>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
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