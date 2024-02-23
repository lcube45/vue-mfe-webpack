<template>
    <div class="header">Header
      <div><strong>Count: {{ count }}</strong></div>
    </div>
    
</template>

<style>
.header {
    padding: 10px;
    background-color: blue;
    color: #fff
}
</style>

<script>
export default {
  computed: {
    count() {
      return this.$store?.state?.count ?? 0;
    }
  },
}
</script>