<script setup>
import Header from "team_blue/Header"
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
    <div><button v-on:click="addOne">Add one</button></div>
  </div>
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