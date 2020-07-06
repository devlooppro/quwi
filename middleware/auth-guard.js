// import api from '@/services/api'

export default async function({ $auth, redirect, store }) {
  try {
    await console.log($auth.loggedIn)
    await store.dispatch('addToken')
    console.log('done!')
  } catch (error) {
    console.log('Error', error)
  }
}
