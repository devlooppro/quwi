import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.quwi.com/v2`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Client-Timezone-Offset': '60',
    'Client-Language': 'ru-RU',
    'Client-Company': 'udimiteam',
    'Client-Device': 'desktop'
  }
})

export default {
  saveToken(token) {
    apiClient.defaults.headers.common.authorization = localStorage.getItem(
      'auth._token.local'
    )
  },
  createProject(project) {
    return apiClient.post('/projects-manage', project)
  },
  editProject(project) {
    return apiClient.post(
      'projects-manage/update?id=' + project.id,
      project.data
    )
  },
  getProjects() {
    return apiClient.get('/projects')
  }
}
