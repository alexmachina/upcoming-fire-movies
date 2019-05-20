import { getMovies } from './api';

const LIST_MOVIES_START = 'upcoming/LIST_MOVIES_START';
const LIST_MOVIES_SUCCESS = 'upcoming/LIST_MOVIES_SUCCESS';
const LIST_MOVIES_FAIL = 'upcoming/LIST_MOVIES_FAIL';

const list_movies_start_action = () =>
  ({ type: LIST_MOVIES_START, loading: false, data: [] });

const list_movies_success_action = (payload) =>
  ({ type: LIST_MOVIES_SUCCESS, loading: false, payload });

const list_movies_fail_action = (error) =>
  ({ type: LIST_MOVIES_FAIL, loading: false, error });

export const fetchMovies = () => async dispatch => {
  dispatch(list_movies_start_action());

  try {
    const movies = await getMovies();
    dispatch(list_movies_success_action(movies));
  } catch (error) {
    dispatch(list_movies_fail_action(error));
  }
}

const initialState = {
  error: undefined,
  payload: [],
  loading: false,
};

export const moviesReducer = (state = initialState, { type, error, payload = [], loading }) => {
  switch(type) {
    case LIST_MOVIES_START:
      return Object.assign({}, state, { loading, payload });
    case LIST_MOVIES_SUCCESS:
      return Object.assign({}, state, { loading, payload });
    case LIST_MOVIES_FAIL:
      return Object.assign({}, state, { loading, error });
    default:
      return state;
  }
};
