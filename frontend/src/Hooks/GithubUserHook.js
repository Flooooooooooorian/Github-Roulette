import { useState } from 'react'
import instance from '../service/githubAPI'

export default function GithubUserHook() {
  const [user, setUser] = useState('')

  const getUser = username => {
    instance
      .get('https://api.github.com/users/' + username)
      .then(response => response.data)
      .then(data => setUser(data))
      .catch(error => console.error(error))
  }

  return { user, getUser }
}
