import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from './styles';

const Genre = ({ name, classes }) => (
  <Grid container className={classes.root}>
    <Typography variant="h4" className={classes.name}>{name}</Typography>
  </Grid>
);

export default styled(Genre);
