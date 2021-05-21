import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}))

export default function ProfilePage({ user, loadUser, repos, loadRepos }) {
  const { username } = useParams()
  const classes = useStyles()

  useEffect(() => {
    loadUser(username)
    loadRepos(username)
  }, [])

  return (
    <Wrapper>
      <NavLink to="javascript:history.back()">Back</NavLink>
      <h1>{username}</h1>
      <Avatar
        alt="Profilepic not found"
        src={user.avatar_url}
        className={classes.large}
      />
      <details>
        <summary>Repos</summary>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
        <p></p>
      </details>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
`
