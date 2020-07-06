<template>
  <div>
    <main v-if="projects !== []" class="main">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProjectCard from '@/components/ProjectCard.vue'
export default {
  middleware: 'auth-guard',
  components: {
    ProjectCard
  },
  computed: mapState({
    user: (state) => state.user,
    projects: (state) => state.projects
  }),
  mounted() {
    console.log(this.$auth.loggedIn)
    if (this.$auth.loggedIn) {
      // console.log(document.cookie)
      this.$store.dispatch('addToken')
    }
    this.$store.dispatch('fetchProjects')
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 600px;
  margin: 30px auto 0;
}
</style>
