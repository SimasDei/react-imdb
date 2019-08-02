import { API_URL, API_KEY } from '../config';

// action types for Home
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const LOAD_MORE_MOVIES = 'LOAD_MORE_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';

// actions  types for Both
export const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';

export const getPopularMovies = () => {
  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const request = fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      return result;
    })
    .catch(error => console.error('Error:', error));

  return {
    type: GET_POPULAR_MOVIES,
    payload: request,
  }
};
