import { getMovies } from '../../../commons/api'

const LIST_MOVIES_START = 'upcoming/LIST_MOVIES_START'
const LIST_MOVIES_SUCCESS = 'upcoming/LIST_MOVIES_SUCCESS'
const LIST_MOVIES_FAIL = 'upcoming/LIST_MOVIES_FAIL'

const listMoviesStart = (page, query = '', clearPayload = false) =>
  ({ type: LIST_MOVIES_START, loading: true, query, page, clearPayload })

const listMoviesSuccess = ({ payload, totalPages }) =>
  ({ type: LIST_MOVIES_SUCCESS, loading: false, payload, totalPages })

const listMoviesFail = (error, page) =>
  ({ type: LIST_MOVIES_FAIL, loading: false, error, page })

export const fetchMovies = (page, query, clearPayload) => async dispatch => {
  dispatch(listMoviesStart(page, query, clearPayload))

  try {
    const data = await getMovies(page, query)
    dispatch(listMoviesSuccess(data))
  } catch (error) {
    dispatch(listMoviesFail(error))
  }
}

const initialState = {
  error: undefined,
  payload: [],
  loading: false,
  page: 1,
  query: undefined,
  totalPages: 0
}

export const moviesListReducer = (
  state = initialState,
  { type, clearPayload = false,
    query, page, error, payload: newPayload,
    loading, totalPages }) => {
  switch (type) {
    case LIST_MOVIES_START:
      return Object.assign({}, state, { loading, page: clearPayload ? 1 : page, query, payload: clearPayload ? [] : state.payload })
    case LIST_MOVIES_SUCCESS:
      return Object.assign({}, state, { loading, payload: state.payload.concat(newPayload), totalPages })
    case LIST_MOVIES_FAIL:
      return Object.assign({}, state, { loading, error, page })
    default:
      return state
  }
}
