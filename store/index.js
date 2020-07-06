import api from '@/services/api.js'

export const state = () => ({
  user: {},
  projects: []
})
export const mutations = {
  SET_AUTH(state, auth) {
    state.auth = auth
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects
  }
}
export const actions = {
  getUserData({ commit }, user) {
    commit('SET_USER', user)
  },
  addToken({ commit }) {
    api.saveToken()
  },
  fetchProjects({ commit }) {
    api.getProjects().then((response) => {
      console.log(response.data.projects)
      commit('SET_PROJECTS', response.data.projects)
    })
  },
  createProject({ commit }, project) {
    api.createProject(project)
  },
  editProject({ commit }, project) {
    api.editProject(project)
  }
}
