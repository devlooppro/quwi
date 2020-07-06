<template>
  <nuxt-link class="link" :to="'/projects/' + project.id">
    <div class="project">
      <div class="logo">
        <img class="logo__image" :src="project.logo_url" alt="" />
      </div>
      <div>
        <p class="text">{{ project.name }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['project']
}
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: #000000;
}
.project {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 25px;
  cursor: pointer;
  height: 90px;
  &:hover {
    background: #e0e0e0;
  }
  .logo {
    border-radius: 50%;
    overflow: hidden;
    margin-right: 30px;
    .logo__image {
      width: 51px;
      height: 51px;
    }
  }
  .text {
    text-decoration: none;
  }
}
</style>
