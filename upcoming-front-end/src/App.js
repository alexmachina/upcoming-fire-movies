import React from 'react'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Movies, { reducers as moviesReducer } from './movies'
import reduxThunk from 'redux-thunk'

const reducer = combineReducers({
  movies: moviesReducer
})

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(reduxThunk)
))

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Movies />
    </BrowserRouter>
  </Provider>
)

export default App
