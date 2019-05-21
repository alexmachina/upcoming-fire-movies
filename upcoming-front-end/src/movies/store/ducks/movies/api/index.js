import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

export async function getMovies(page) {
  const { data } = await axios.get(`/movies/upcoming?page=${page}`)
  return Movies(data);
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
