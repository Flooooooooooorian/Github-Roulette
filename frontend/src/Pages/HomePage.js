import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import styled from 'styled-components/macro'
import instance from '../service/githubAPI'

export default function HomePage() {
  const history = useHistory()
  const [username, setUsername] = useState('')

  const refTimer = useRef(0)

  const handleInputChange = event => {
    clearTimeout(refTimer.current)
    setUsername(event.target.value)
    refTimer.current = setTimeout(searchForGithubUsers, 3000)
  }

  const searchForGithubUsers = () => {
    console.log(username)
    instance
      .get('https://api.github.com/search/users?q=' + username)
      .then(response => response.data)
      .then(data => console.log(data))
      .catch(error => console.error(error.message))
  }

  const handleButtonClick = event => {
    history.push('users/' + username)
  }

  return (
    <Wrapper>
      <TextField
        value={username}
        label="Username"
        onChange={handleInputChange}
      />
      <Button onClick={handleButtonClick} variant="contained" color="primary">
        Los
      </Button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 20px;

  button {
    margin-left: 20px;
  }
`
