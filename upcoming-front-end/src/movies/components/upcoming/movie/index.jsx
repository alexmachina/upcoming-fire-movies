import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from './styles';

const Movie = ({
  classes, title, poster,
}) => (
  <Grid container>
    <Grid item xs={12}>
      <img className={classes.poster} src={poster} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4" className={classes.title}>{title}</Typography>
    </Grid>
  </Grid>
)

export default styled(Movie);
