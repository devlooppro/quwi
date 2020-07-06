<template>
  <main class="main">
    <form action="" class="form" @submit.prevent="createProject">
      <label for="">Name of project:</label>
      <input id="" v-model="nameProject.name" type="text" name="" />
      <button :disabled="nameProject.name == ''">Create</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      nameProject: {
        name: ''
      }
    }
  },
  methods: {
    createProject() {
      this.$store.dispatch('createProject', this.nameProject)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 600px;
  margin: 30px auto 0;
  .form {
    background: #ffffff;
    height: 90px;
    display: flex;
    align-items: center;
    padding: 20px;
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
