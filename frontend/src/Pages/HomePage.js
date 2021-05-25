import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import styled from 'styled-components/macro'
import instance from '../service/githubAPI'
import Autocomplete from '@material-ui/lab/Autocomplete'

export default function HomePage() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const refTimer = useRef(0)

  const handleInputChange = event => {
    clearTimeout(refTimer.current)
    setUsername(event.target.value)
    refTimer.current = setTimeout(() => {
      instance
        .get('https://api.github.com/search/users?q=' + event.target.value)
        .then(response => response.data)
        .then(data => data.items)
        .then(items => setSuggestions(items))
        .catch(error => console.error(error.message))
    }, 3000)
  }

  const handleButtonClick = event => {
    history.push('users/' + username)
  }

  return (
    <Wrapper>
      <Autocomplete
        id="usernames-combo-box"
        freeSolo
        options={suggestions}
        getOptionLabel={option => option.login}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField
            {...params}
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleInputChange}
          />
        )}
      />
      <Button onClick={handleButtonClick} variant="contained" color="primary">
        Los
      </Button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 20px;
  display: flex;

  button {
    margin-left: 20px;
  }
`
