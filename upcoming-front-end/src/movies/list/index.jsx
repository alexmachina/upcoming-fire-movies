import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import WhatsHotIcon from '@material-ui/icons/Whatshot';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from 'react-redux';
import queryString from 'query-string';

import moment from 'moment';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Movie from './movie';
import Loader from './loader';

import InfiniteScroll from 'react-infinite-scroller';
import { fetchMovies } from '../store/ducks/movies';

import styled from './styles';

class List extends Component {
  constructor(props) {
    super(props);
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onQuerySubmit = this.onQuerySubmit.bind(this);

    this.state = { query: '' };
    this.queryInput = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search },
      dispatch
    } = this.props;

    const { 
      location: { search: prevSearch },
    } = prevProps;
    
    
    console.log(prevSearch, search);
    if (search !== prevSearch) {
      const { query } = queryString.parse(search); 
      dispatch(fetchMovies(1, query));
    }
  }

  async componentDidMount() {
    const {
      location: { search },
      dispatch
    } = this.props;

    const { query } = queryString.parse(search); 
    dispatch(fetchMovies(1, query));
  }

  async onLoadMore() {
    const { page, loading, dispatch } = this.props;
    !loading && dispatch(fetchMovies(page + 1));
  }

  formatDate(release_date) {
    const inputFormat = 'YYYY-MM-DD';
    const outputFormat = 'MMM, Do, YYYY';

    const date = moment(release_date, inputFormat);
    return date.format(outputFormat);
  }

  onQuerySubmit(e) {
    e.preventDefault();
    const {
      queryInput: { current: { value: query } },
      props: { dispatch, history: { push } }
    } = this;

    if (query) {
      const nextUrl = `/?query=${query}`;
      dispatch(fetchMovies(1, query));
      push(nextUrl);
    }
  }

  render() {
    const { classes, loading, movies, hasMore, onLoadMore, page } = this.props;

    return (
      <Grid container className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} className={classes.title_container}>
          <Link to="/" className={classes.linkHome}>
            <Typography variant="h1" className={classes.title}>
              upcoming <WhatsHotIcon className={classes.fireIcon} />
              movies</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} className={classes.search_container}>
          <form className={classes.form} onSubmit={this.onQuerySubmit}>
            <Input
              inputRef={this.queryInput}
              name="query"
              placeholder="search your movie"
              className={classes.input}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              } />
            <Button type="submit" color="secondary" variant="contained" className={classes.button}>Search Movie</Button>
          </form>
        </Grid>
        <Grid item xs={12} className={classes.movies_container}>
          <InfiniteScroll
            className={classes.infiniteScroll}
            pageStart={1}
            hasMore={hasMore}
            loadMore={this.onLoadMore}
            initialLoad={false}
            loader={<Loader />}>

            <Grid container className={classes.moviesList} spacing={16}>
              {loading && <Loader />}
              {movies.map(({ poster, title, id, release_date, genres }) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                  <Movie
                    id={id}
                    title={title}
                    poster={poster}
                    release_date={this.formatDate(release_date)}
                    genres={genres}/>
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ movies: { payload: movies, page, loading, query, total_pages }}) => ({
  movies,
  page, 
  query,
  hasMore: page < total_pages,
  loading,
  total_pages
});

const StyledList = styled(List);

export default withRouter(connect(mapStateToProps)(StyledList));
