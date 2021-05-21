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

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import WorkIcon from '@material-ui/icons/Work'

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
    marginBottom: 20,
  },
  listing: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
            <List className={classes.listing}>
              {repos.map(repo => (
                <ListItem key={repo.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={repo.name} secondary="" />
                </ListItem>
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
`
