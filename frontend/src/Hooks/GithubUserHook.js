import { useState } from 'react'
import instance from '../service/githubAPI'

export default function GithubUserHook() {
  const [user, setUser] = useState('')
  const [repos, setRepos] = useState([])

  const loadUser = username => {
    instance
      .get('https://api.github.com/users/' + username)
      .then(response => response.data)
      .then(data => setUser(data))
      .catch(error => console.error(error))
  }

  //"repos_url": "https://api.github.com/users/bloier/repos",
  const loadRepos = username => {
    instance
      .get('https://api.github.com/users/' + username + '/repos')
      .then(response => response.data)
      .then(data => setRepos(data))
      .catch(error => console.error(error))
  }

  return { user, loadUser, repos, loadRepos }
}
