import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Profilpage({ user, getUser }) {
  const { username } = useParams()

  useEffect(() => {
    getUser(username)
  })

  return (
    <div>
      <h1> {username} </h1>
      <img src={user.avatar_url} alt={'Profilepic not found'} />
      <details>
        <summary>Repos</summary>
        <p></p>
      </details>
    </div>
  )
}
