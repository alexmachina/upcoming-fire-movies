import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

export async function getMovies (page, query = '') {
  const url = `/movies/upcoming?page=${page}&query=${query}`
  const { data: { results, total_pages: totalPages } } = await axios.get(url)
  return { payload: Movies(results), totalPages }
}

export async function getMovie (id) {
  const url = `/movies/${id}`
  const { data } = await axios.get(url)
  return { payload: Movie(data) }
}

function Movie ({
  id, title, poster, overview, release_date: releaseDate, genres
}) {
  return {
    id, title, poster, overview, releaseDate, genres
  }
}

function Movies (results) {
  return results.map(Movie)
}
