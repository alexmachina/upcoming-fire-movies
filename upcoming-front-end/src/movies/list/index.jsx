import React, { Component } from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Movie from './movie';
import TopBar from './topbar';
import Loader from './loader';

import InfiniteScroll from 'react-infinite-scroller';

import { fetchMovies } from '../store/ducks/movies';

import styled from './styles';

class List extends Component {
  constructor(props) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);
  }
  
  async componentDidMount() {
    this.props.dispatch(fetchMovies(1));
  }

  async onLoadMore() {
    const { page } = this.props;
    this.props.dispatch(fetchMovies(page + 1));
  }

  render() {
    const { classes, movies, hasMore = true, onLoadMore, page } = this.props;
 
    return (
      <Grid container className={classes.root}>
        <TopBar />
        <CssBaseline />
        <Grid item className={classes.movies_container}>

          <Grid container className={classes.moviesList} spacing={16}>
            <InfiniteScroll
              pageStart={1}
              hasMore={hasMore}
              loadMore={this.onLoadMore}
              initialLoad={false}
              loader={<Loader />}>
              {movies.map(({ poster, title, id, release_date, genres }) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                  <Movie id={id} title={title} poster={poster} release_date={release_date} genres={genres}/>
                </Grid>
              ))}
            </InfiniteScroll>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ movies: state.movies.payload, page: state.movies.page });
const StyledList = styled(List);

export default connect(mapStateToProps)(StyledList);
