import { getMovies } from './api';

const LIST_MOVIES_START = 'upcoming/LIST_MOVIES_START';
const LIST_MOVIES_SUCCESS = 'upcoming/LIST_MOVIES_SUCCESS';
const LIST_MOVIES_FAIL = 'upcoming/LIST_MOVIES_FAIL';

const list_movies_start_action = (page) =>
  ({ type: LIST_MOVIES_START, loading: false, page });

const list_movies_success_action = (payload) =>
  ({ type: LIST_MOVIES_SUCCESS, loading: false, payload });

const list_movies_fail_action = (error, page) =>
  ({ type: LIST_MOVIES_FAIL, loading: false, error, page });

export const fetchMovies = (page) => async dispatch => {
  dispatch(list_movies_start_action(page));

  try {
    const movies = await getMovies(page);
    dispatch(list_movies_success_action(movies));
  } catch (error) {
    dispatch(list_movies_fail_action(error));
  }
}

const initialState = {
  error: undefined,
  payload: [],
  loading: false,
  page: 1,
};

export const moviesReducer = (state = initialState, { type, page, error, payload: newPayload, loading }) => {
  switch(type) {
    case LIST_MOVIES_START:
      return Object.assign({}, state, { loading, page });
    case LIST_MOVIES_SUCCESS:
      return Object.assign({}, state, { loading, payload: state.payload.concat(newPayload) });
    case LIST_MOVIES_FAIL:
      return Object.assign({}, state, { loading, error, page });
    default:
      return state;
  }
};
