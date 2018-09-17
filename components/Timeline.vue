<template>
  <div class="timeline">
    <p>post length: <i>{{ posts.length}}</i></p>
    <post-area></post-area>
    <ul class="posts">
      <transition-group name="post">
        <post class="post" :post="post" :key="post" v-for="post in posts"></post>
      </transition-group>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Post from '~/components/Post.vue'
  import PostArea from '~/components/PostArea.vue'

  export default {
    components: {
      Post,
      PostArea
    },
    computed: {
      ...mapState([
        'posts'
      ])
    }
  }
</script>

<style scoped>
  .timeline {
    height: calc(100vh - 76px);
  }

  .timeline .posts {
    height: calc(100% - 36px);
    overflow-y: auto;
  }

  .post-enter-active {
    animation: slideIn 0.3s linear;
  }

  @keyframes slideIn {
    0% {
      opacity: 0.0
    }
    100% {
      opacity: 1.0
    }
  }
</style>
