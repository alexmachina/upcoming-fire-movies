import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Genre from '../../../../commons/components/movie/genre'
import ReleaseDate from '../../../../commons/components/movie/releaseDate'
import styled from './styles'

const MovieDetail = ({
  id: movieId, title, poster, description, overview, genres, releaseDate, classes
}) => (
  <Grid container className={classes.root} spacing={16}>
    <Grid item xs={12} sm={6} className={classes.posterContainer}>
      <img alt='poster' src={poster} className={classes.poster} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Grid container className={classes.detailsContainer}>
        <Typography variant='subtitle1' className={classes.title}>{title}</Typography>
        <Typography variant='body' className={classes.overview}>{overview}</Typography>
        <ReleaseDate releaseDate={releaseDate} />
        <Grid container className={classes.genres}>
          {genres.map(({ id: genreId, name }) =>
            <Genre key={`${movieId}_${genreId}`} name={name} big />)
          }
        </Grid>
        <Typography variant='body2' className={classes.description}>{description}</Typography>
      </Grid>
    </Grid>
  </Grid>
)

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  releaseDate: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default styled(MovieDetail)
