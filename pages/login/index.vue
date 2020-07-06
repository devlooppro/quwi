<template>
  <div>
    <main class="main">
      <SignIn />
    </main>
  </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue'
export default {
  middleware: 'auth-guard',
  components: {
    SignIn
  }
}
</script>

<style lang="scss">
input {
  outline: none;
}

.main {
  position: relative;
  height: calc(100vh - 46px);
}
</style>
