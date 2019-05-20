import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from './styles';

const MovieDetail = ({
  title, poster, description, overview, classes
}) => (
  <Grid container className={classes.root}>
    <Grid item xs={6}>
      <img src={poster} className={classes.poster} />
    </Grid>
    <Grid item xs={6}>
      <Grid container>
        <Typography variant="subtitle1">{title}</Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default styled(MovieDetail);
