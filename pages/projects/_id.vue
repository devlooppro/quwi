<template>
  <main class="main">
    <form class="form" action="" @submit.prevent="editProject">
      <nuxt-link class="form-link" to="/projects">Back</nuxt-link>
      <label for="">Name of project:</label>
      <input v-model="dataProject.name" type="text" />
      <button :disabled="dataProject.name == ''">OK</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dataProject: {
        name: ''
      },
      id: this.$route.params.id
    }
  },
  methods: {
    editProject() {
      this.$store.dispatch('editProject', {
        data: this.dataProject,
        id: this.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 600px;
  margin: 30px auto 0;
  .form {
    position: relative;
    background: #ffffff;
    height: 90px;
    display: flex;
    align-items: center;
    padding: 20px;
    .form-link {
      position: absolute;
      top: 5px;
      left: 20px;
      background: #2668c1;
      color: #ffffff;
      padding: 5px;
      text-decoration: none;
    }
    label {
      margin-right: 30px;
    }
    input {
      height: 30px;
      margin-right: 15px;
    }
    button {
      border: 0;
      background: #2668c1;
      color: #ffffff;
      height: 30px;
    }
  }
}
</style>
