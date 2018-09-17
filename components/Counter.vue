<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="$store.commit('cnt/increment')">increment</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState('cnt', [
        'counter'
      ])
    }
  }
</script>

<style scoped>

</style>
