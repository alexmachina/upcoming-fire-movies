import React from 'react';
import UpcomingMovies from './list';

const Movies = ({ match: { params: { query='' }} }) => (
  <UpcomingMovies />
);

export default Movies;
