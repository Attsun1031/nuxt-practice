export const state = () => ({
  posts: [],
  counter: 0
})

export const mutations = {
  addPost(state, {post}) {
    state.posts.push(post)
    state.counter = state.posts.length;
  }
}

export const actions = {
  addPost({commit}, {body}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('addPost', {post: body})
        resolve()
      }, 500)
    })
  }
}
