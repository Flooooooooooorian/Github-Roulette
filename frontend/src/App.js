import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import githubApi from './service/githubAPI'

function App() {
  const [profile, setProfile] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    githubApi
      .get('https://api.github.com/user')
      .then(response => response.data)
      .then(setProfile)
      .catch(error => setError(error.response.status))
  }, [])

  if (error) {
    return (
      <Page>
        <img src={`https://http.cat/${error}`} alt="" />
      </Page>
    )
  }

  return (
    <Page>
      <h1>Hallo, {profile.login} 👋🏽</h1>
      <Avatar src={profile.avatar_url} />
    </Page>
  )
}

export default App

const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`
