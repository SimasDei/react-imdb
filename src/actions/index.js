import { API_URL, API_KEY } from '../config';

// action types for Home
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const LOAD_MORE_MOVIES = 'LOAD_MORE_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';

// actions  types for Both
export const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';

// Actions for Both
export const showLoadingSpinner = () => ({
  type: SHOW_LOADING_SPINNER,
  payload: null,
});

// Actions for Home
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
  };
};

export const searchMovies = searchTerm => {
  let endpoint;

  if (!searchTerm) {
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
  }

  const request = fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      return { ...result, searchTerm };
    })
    .catch(error => console.error('Error:', error));

  return {
    type: SEARCH_MOVIES,
    payload: request,
  };
};

export const loadMoreMovies = (searchTerm, currentPage) => {
  let endpoint;

  if (searchTerm === '') {
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
  } else {
    endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage +
      1}`;
  }

  const request = fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      return { ...result, searchTerm };
    })
    .catch(error => console.error('Error:', error));

  return {
    type: LOAD_MORE_MOVIES,
    payload: request,
  };
};

export const clearMovies = () => ({
  type: 'CLEAR_MOVIES',
  payload: null,
});
