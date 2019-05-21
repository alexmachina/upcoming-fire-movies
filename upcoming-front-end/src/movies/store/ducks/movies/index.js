import { getMovies } from './api';

const LIST_MOVIES_START = 'upcoming/LIST_MOVIES_START';
const LIST_MOVIES_SUCCESS = 'upcoming/LIST_MOVIES_SUCCESS';
const LIST_MOVIES_FAIL = 'upcoming/LIST_MOVIES_FAIL';

const list_movies_start_action = (page, query) =>
  ({ type: LIST_MOVIES_START, loading: true, query, page, clearPayload: Boolean(query) || query !== '' });

const list_movies_success_action = ({ payload, total_pages }) =>
  ({ type: LIST_MOVIES_SUCCESS, loading: false, payload, total_pages });

const list_movies_fail_action = (error, page) =>
  ({ type: LIST_MOVIES_FAIL, loading: false, error, page });

export const fetchMovies = (page, query) => async dispatch => {
  dispatch(list_movies_start_action(page, query));

  try {
    const data = await getMovies(page, query);
    dispatch(list_movies_success_action(data));
  } catch (error) {
    dispatch(list_movies_fail_action(error));
  }
}

const initialState = {
  error: undefined,
  payload: [],
  loading: false,
  page: 1,
  query: undefined,
  total_pages: 1,
};

export const moviesReducer = (state = initialState, { type, clearPayload = false, query, page, error, payload: newPayload, loading, total_pages }) => {
  switch(type) {
    case LIST_MOVIES_START:
      return Object.assign({}, state, { loading, page, query, payload: clearPayload ? [] : state.payload, total_pages});
    case LIST_MOVIES_SUCCESS:
      return Object.assign({}, state, { loading, payload: state.payload.concat(newPayload) });
    case LIST_MOVIES_FAIL:
      return Object.assign({}, state, { loading, error, page });
    default:
      return state;
  }
};
