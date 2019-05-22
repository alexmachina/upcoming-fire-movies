import React from 'react';
import UpcomingMoviesList from './pages/list';
import Grid from '@material-ui/core/Grid';
import Title from './commons/title';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#252525',
    padding: '24px',
  }
});

const Movies = ({ classes }) => (
  <Grid container className={classes.root}>
    <Title />
    <UpcomingMoviesList />
  </Grid>
);

export default withStyles(styles)(Movies);
