import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Avatar, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  repos: {
    marginTop: 20,
  },
}))

export default function ProfilePage({ user, loadUser, repos, loadRepos }) {
  const history = useHistory()

  const { username } = useParams()
  const classes = useStyles()

  const handleGoBack = () => {
    history.goBack()
  }

  useEffect(() => {
    loadUser(username)
    loadRepos(username)
  }, [])

  return (
    <Wrapper>
      <IconButton aria-label="Back" onClick={handleGoBack}>
        <ArrowBackIosIcon />
      </IconButton>
      <h1>{username}</h1>
      <Avatar
        alt="Profilepic not found"
        src={user.avatar_url}
        className={classes.large}
      />

      <Accordion className={classes.repos}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Repos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              {repos.map(repo => (
                <li key={repo.id}>{repo.name}</li>
              ))}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
`
