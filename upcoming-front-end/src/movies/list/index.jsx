import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Movie from './movie';
import TopBar from './topbar';
import { getMovies } from '../store/services/api';
import styled from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  
  async componentDidMount() {
    const movies = await getMovies();
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    const { classes } = this.props;
 
    return (
      <Grid container className={classes.root}>
        <TopBar />
        <CssBaseline />
        <Grid item className={classes.movies_container}>
          <Grid container className={classes.moviesList} spacing={16}>
            {movies.map(({ poster, title, id, release_date }) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <Movie title={title} poster={poster} release_date={release_date} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default styled(App);
