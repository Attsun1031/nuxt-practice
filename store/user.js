import firebase from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'

const db = firebase.database()
const usersRef = db.ref('/dev/v2/users/4')

export const state = () => ({
  users: []
})

export const actions = {
  initUsers: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('users', usersRef)
  })
}
