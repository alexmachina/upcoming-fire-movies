import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Movies from './movies';
import MovieDetail from './movies/detail';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Movies} />
    <Route path="/movie/:id" component={MovieDetail} />
  </BrowserRouter>
);

export default App;
