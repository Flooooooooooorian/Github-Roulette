import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import styled from 'styled-components/macro'

export default function HomePage() {
  const history = useHistory()
  const [username, setUsername] = useState('')

  const handleInputChange = event => {
    setUsername(event.target.value)
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
