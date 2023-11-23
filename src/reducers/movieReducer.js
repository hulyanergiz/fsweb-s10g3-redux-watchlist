import {
  NEXT,
  PREVIOUS,
import { NEXT } from "../actions/movieActions";
  REMOVE_MOVIE,
} from "../actions/movieActions";
import { movies } from "../movies";

const initialState = { movies: movies, sira: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT:
      if (state.sira < state.movies.length - 1) {
        return { ...state, sira: state.sira + 1 };
      } else {
        return state;
      }
    case PREVIOUS:
      if (state.sira > 0) {
        return { ...state, sira: state.sira - 1 };
      } else {
        return state;
      }
    case REMOVE_MOVIE:
      const notFavMovies = state.movies.filter(
        (mov) => mov.id !== action.payload.id
      );
      return {
        ...state,
        movies: notFavMovies,
        sira:
          state.sira === state.movies.length - 1 ? state.sira - 1 : state.sira,
      };
    default:
      return state;
  }
};
export default reducer;
