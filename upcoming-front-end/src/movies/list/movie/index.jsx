import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Genre from './genre';
import Poster from './poster';
import styled from './styles';

const Movie = ({
  id: movie_id, classes, title, poster, release_date, genres,
}) => (
  <Grid container spacing={16}>
    <Grid item xs={4}>
      <Poster url={poster} />
    </Grid>
    <Grid item xs={8}>
      <Typography variant="h4" className={classes.title}>{title}</Typography>
      <Typography variant="subtitle1" className={classes.release_date}>Relase: {release_date}</Typography>
      <Grid container className={classes.genres}>
      {genres.map(({ id: genre_id, name }) =>
        <Genre key={`${movie_id}_${genre_id}`} name={name} />)}
      </Grid>
    </Grid>
  </Grid>
)

export default styled(Movie);
