<template>
  <div class="wrapper">
    <div class="user-login">
      <nuxt-link to="/" class="user-login__link"
        ><img class="link__image" src="../assets/img/quwi-logo.png" />
        <div class="link__text">QUWI</div></nuxt-link
      >
      <form id="login-form" class="form" @submit.prevent="login(loginData)">
        <div class="form__main">
          <fieldset>
            <legend :class="{ show: showFieldset == 'email' }" class="legend">
              Email
            </legend>
            <input
              v-model="loginData.email"
              placeholder="Email"
              type="email"
              @focus="fieldsetShow('email')"
              @blur="clearShow"
            />
          </fieldset>
          <fieldset>
            <legend :class="{ show: showFieldset == 'pass' }" class="legend">
              Password
            </legend>
            <input
              v-model="loginData.password"
              placeholder="Password"
              type="password"
              @focus="fieldsetShow('pass')"
              @blur="clearShow"
            />
          </fieldset>
        </div>

        <div class="form__bottom">
          <button class="bottom__button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      showFieldset: '',
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  computed: mapState({
    user: (state) => state.user
  }),
  methods: {
    clearShow() {
      this.showFieldset = ''
    },
    fieldsetShow(par) {
      this.showFieldset = par
    },
    async login(loginData) {
      try {
        await this.$auth.loginWith('local', {
          data: loginData
        })
        this.$store.dispatch('addToken', this.$auth.login)
        this.$store.dispatch('getUserData', this.$auth.user)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.user-login {
  width: 440px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 46px));
  padding: 25px 40px 35px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.11);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  .user-login__link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-bottom: 26px;
    .link__image {
      width: 40px;
      height: 40px;
      margin-right: 14px;
    }
    .link__text {
      font-weight: 700;
      font-size: 24px;
      color: #000000;
    }
  }
  .form {
    .form__main {
      fieldset {
        padding: 15px;
        border: 1px solid #dadada;
        border-radius: 5px;
        margin-top: 5px;
        margin-bottom: 12px;
        position: relative;
        .legend {
          position: absolute;
          top: -10px;
          background-color: #ffffff;
          color: #999999;
          font-size: 14px;
          display: none;
        }
        .show {
          display: block;
        }
        input {
          border: 0;
          font-size: 14px;
          width: 100%;
        }
      }
    }
    .form__bottom {
      .bottom__button {
        background: #2668c1;
        height: 52px;
        font-size: 18px;
        border-radius: 9px;
        margin-top: 17px;
        color: #fff;
        border: 0;
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
