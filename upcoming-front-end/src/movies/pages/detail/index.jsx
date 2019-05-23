import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Movie from './components/movie'
import List from '../list'
import Loader from '../../commons/components/loader'
import styled from './styles'
import { fetchMovie } from './ducks'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class MovieDetail extends Component {
  componentDidMount () {
    const {
      match: { params: { id } },
      dispatch
    } = this.props

    dispatch(fetchMovie(id))
  }

  render () {
    const {
      movie: {
        title, poster, overview, releaseDate, genres = []
      },
      loading,
      classes
    } = this.props

    return (
      <Grid container className={classes.root}>
        {!loading && (
          <Grid container>
            <Grid item xs={12} className={classes.movie}>
              <Movie
                title={title}
                poster={poster}
                overview={overview}
                releaseDate={releaseDate}
                genres={genres} />
            </Grid>
            <Grid item xs={12} spacing={16} className={classes.list}>
              <List />
            </Grid>
          </Grid>
        )}
        {loading && <Loader />}
      </Grid>
    )
  }
}

MovieDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  movie: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

const mapStateToProps = ({
  movies: { detail: { payload: movie, loading } }
}) => ({
  movie,
  loading
})

export default connect(mapStateToProps)(withRouter(styled(MovieDetail)))
