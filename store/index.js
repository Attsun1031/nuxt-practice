import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    counter: 0,
    posts: []
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    addPost(state, {post}) {
      state.posts.push(post)
    }
  },
  actions: {
    addPost({commit}, {body}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('addPost', {post: body})
          resolve()
        }, 500)
      })
    }
  }
})

export default store
