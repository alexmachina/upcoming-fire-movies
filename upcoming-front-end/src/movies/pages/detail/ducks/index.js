import { getMovie } from '../../../commons/api'

const GET_DETAIL_START = 'movie/GET_DETAIL_START'
const GET_DETAIL_SUCCESS = 'movie/GET_DETAIL_START'
const GET_DETAIL_FAIL = 'movie/GET_DETAIL_START'

const getDetailStart = (id) => ({
  type: GET_DETAIL_START, loading: true, id, payload: {}
})

const getDetailSuccess = ({ payload }) => ({
  type: GET_DETAIL_SUCCESS, loading: false, payload
})

const getDetailFail = (error) => ({
  type: GET_DETAIL_FAIL, loading: false, error
})

export const fetchMovie = (id) => async dispatch => {
  dispatch(getDetailStart(id))

  try {
    const data = await getMovie(id)
    dispatch(getDetailSuccess(data))
  } catch (error) {
    dispatch(getDetailFail(error))
  }
}

const initialState = {
  error: undefined,
  loading: false,
  payload: {}
}

export const movieDetailReducer = (
  state = initialState,
  { type, loading, id, payload, error }) => {
  switch (type) {
    case GET_DETAIL_START:
      return Object.assign({}, state, { loading, id, payload })
    case GET_DETAIL_SUCCESS:
      return Object.assign({}, state, { loading, payload })
    case GET_DETAIL_FAIL:
      return Object.assign({}, state, { loading, error })
    default:
      return state
  }
}
