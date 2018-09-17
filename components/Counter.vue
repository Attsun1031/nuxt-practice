<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="$store.commit('increment')">increment</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState([
        'counter'
      ])
    }
  }
</script>

<style scoped>

</style>
