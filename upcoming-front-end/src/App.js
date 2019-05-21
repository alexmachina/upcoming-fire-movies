import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { moviesReducer } from './movies/store/ducks/movies';
import reduxThunk from 'redux-thunk';
import Movies from './movies';
import MovieDetail from './movies/detail';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

const reducer = combineReducers({
  movies: moviesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(reduxThunk)
));

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Movies} />
      <Route path="/query/:query" component={Movies} />
      <Route path="/movie/:id" component={MovieDetail} />
    </BrowserRouter>
  </Provider>
);

export default App;
