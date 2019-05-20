import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

export async function getMovies() {
  const { data } = await axios.get('/movies/upcoming')
  return Movies(data);
}

function Movie({
  id, title, poster, overview, release_date
}) {
  return {
    id, title, poster, overview, release_date
  };
}

function Movies({ results }) {
  return results.map(Movie);
}
