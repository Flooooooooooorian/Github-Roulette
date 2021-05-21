import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProfilePage({ user, loadUser, repos, loadRepos }) {
  const { username } = useParams()

  useEffect(() => {
    loadUser(username)
    loadRepos(username)
  })

  return (
    <div>
      <h1> {username} </h1>
      <img src={user.avatar_url} alt={'Profilepic not found'} />
      <details>
        <summary>Repos</summary>
        <ul>{}</ul>
        <p></p>
      </details>
    </div>
  )
}
