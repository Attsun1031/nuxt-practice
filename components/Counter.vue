<template>
  <div>
    <div>{{ count }}</div>
    <button @click="$store.commit('increment')">increment</button>
  </div>
</template>

<script>
    export default {
      computed: {
        count() {
          return this.$store.state.counter
        }
      }
    }
</script>

<style scoped>

</style>
