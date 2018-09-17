<template>
  <form class="field is-grouped" @submit.prevent="doPost">
    <p class="control is-expanded">
      <input class="input" type="text" placeholder="How are you?" v-model="body">
    </p>
    <p class="control">
      <button class="button is-primary" :disabled=processing>
        Post
      </button>
    </p>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        body: '',
        processing: false
      }
    },
    methods: {
      async doPost() {
        this.processing = true
        await this.addPost({body: this.body})
        this.body = ''
        this.processing = false
      },
      ...mapActions([
        'addPost'
      ])
    }
  }
</script>

<style scoped>
  .field {
    margin-bottom: 16px;
  }
</style>
