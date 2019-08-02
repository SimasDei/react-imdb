import {
  SHOW_LOADING_SPINNER,
  SEARCH_MOVIES,
  GET_POPULAR_MOVIES,
  LOAD_MORE_MOVIES,
  CLEAR_MOVIES,
} from '../actions';

const defaultState = {
  movies: [],
  heroImage: null,
  loading: false,
  currentPage: 0,
  totalPages: 0,
  searchTerm: '',
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: '',
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        loading: false,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: action.payload.searchTerm,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
}
