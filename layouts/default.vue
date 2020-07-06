<template>
  <div>
    <header class="header">
      <nav>
        <nuxt-link to="/projects" class="header__link">
          <img
            class="link__image"
            src="../assets/img/quwi-logo.png"
            alt="quwi-logo"
        /></nuxt-link>
        <div v-if="!$auth.loggedIn" class="header__right-block">
          <nuxt-link class="right-block__link" to="/login">Log In</nuxt-link>
        </div>
        <div v-else class="header__right-block">
          <nuxt-link class="right-block__link" to="/projects/create"
            >Create</nuxt-link
          >
          <button class="right-block__button" @click="logOut">Log out</button>
        </div>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: url('../assets/img/gray_blur.png');
}

nav {
  background: #fafafa;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  .header__link {
    display: block;
    height: auto;
    margin-left: 13px;
    margin-right: 13px;
    .link__image {
      width: 25px;
    }
  }
  .header__right-block {
    display: flex;
    .right-block__link {
      padding: 0 15px;
      line-height: 46px;
      height: 46px;
      text-decoration: none;
      color: #636363;
      text-transform: uppercase;
      font-size: 12px;
      display: block;
      &:hover {
        color: #c44512;
        background: #e0e0e0;
      }
    }
    .right-block__button {
      border: 0;
      background: transparent;
      color: #636363;
      text-transform: uppercase;
      font-size: 12px;
      padding: 0 15px;
      &:hover {
        color: #c44512;
        background: #e0e0e0;
      }
    }
  }
}
</style>
