import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from './styles';

const Movie = ({
  classes, title, poster, release_date,
}) => (
  <Grid container spacing={16}>
    <Grid item xs={4}>
      <img className={classes.poster} src={poster} />
    </Grid>
    <Grid item xs={8}>
      <Typography variant="h4" className={classes.title}>{title}</Typography>
      <Typography variant="subtitle" className={classes.release_date}>{release_date}</Typography>
    </Grid>
  </Grid>
)

export default styled(Movie);
