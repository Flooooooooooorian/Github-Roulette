import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProfilePage({ user, loadUser, repos, loadRepos }) {
  const { username } = useParams()

  useEffect(() => {
    loadUser(username)
    loadRepos(username)
  }, [])

  return (
    <div>
      <a href="javascript:history.back()">Back</a>
      <h1> {username} </h1>
      <img src={user.avatar_url} alt={'Profilepic not found'} />
      <details>
        <summary>Repos</summary>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
        <p></p>
      </details>
    </div>
  )
}
