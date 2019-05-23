import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Genre from '../../../../commons/components/movie/genre'
import Poster from '../../../../commons/components/movie/poster'
import ReleaseDate from '../../../../commons/components/movie/releaseDate'
import styled from './styles'

const Movie = ({
  id: movieId, classes, title, poster, releaseDate, genres
}) => (
  <Grid container spacing={16}>
    <Grid item xs={4} className={classes.poster}>
      <Link to={`/movie/${movieId}`}>
        <Poster url={poster} />
      </Link>
    </Grid>
    <Grid item xs={8}>
      <Link to={`/movie/${movieId}`} className={classes.title}>{title}</Link>
      <ReleaseDate releaseDate={releaseDate} />
      <Grid container className={classes.genres}>
        {genres.map(({ id: genreId, name }) =>
          <Genre key={`${movieId}_${genreId}`} name={name} />)
        }
      </Grid>
    </Grid>
  </Grid>
)

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  poster: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
}

export default styled(Movie)
