import { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
    <div>
      <input onChange={handleInputChange} value={username} />
      <button onClick={handleButtonClick}>Los</button>
    </div>
  )
}
