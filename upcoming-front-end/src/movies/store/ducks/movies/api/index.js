import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

export async function getMovies(page, query='') {
  const url = `/movies/upcoming?page=${page}&query=${query}`;
  const { data, total_pages } = await axios.get(url);
  return { payload: Movies(data), total_pages };
}

function Movie({
  id, title, poster, overview, release_date, genres
}) {
  return {
    id, title, poster, overview, release_date, genres
  };
}

function Movies({ results }) {
  return results.map(Movie);
}
