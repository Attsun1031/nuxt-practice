<template>
  <div>
    <ul class="users">
      <transition-group name="user">
        <li class="user" :user="user" :key="user.user_id" v-for="user in users">
          su_id: {{ user.su_id }} user_id: {{ user.user_id }} first_login_dt: {{ user.first_login_dt }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState('user', [
        'users'
      ])
    }
  }
</script>

<style scoped>

</style>
