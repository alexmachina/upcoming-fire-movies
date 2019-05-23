import React from 'react'
import PropTypes from 'prop-types'
import { combineReducers } from 'redux'
import UpcomingMoviesList from './pages/list'
import MovieDetail from './pages/detail'
import Grid from '@material-ui/core/Grid'
import Title from './commons/components/title'
import { moviesListReducer } from './pages/list/ducks'
import { movieDetailReducer } from './pages/detail/ducks'
import { withStyles } from '@material-ui/core/styles'
import { Route } from 'react-router-dom'

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#252525',
    padding: '24px'
  }
})

const Movies = ({ classes }) => (
  <Grid container className={classes.root}>
    <Title />
    <Route exact path='/' component={UpcomingMoviesList} />
    <Route path='/movie/:id' component={MovieDetail} />
  </Grid>
)

Movies.propTypes = {
  classes: PropTypes.object.isRequired
}

export const reducers = combineReducers({
  list: moviesListReducer,
  detail: movieDetailReducer
})

export default withStyles(styles)(Movies)
