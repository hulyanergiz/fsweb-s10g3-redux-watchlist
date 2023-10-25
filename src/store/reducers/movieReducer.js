import { movies } from "../../movies";
import {
  PREVIOUS,
  NEXT,
  RECYCLE_MOVIE,
  REMOVE_MOVIE,
} from "../actions/moviesAction";

const initialState = { movies: movies, sira: 0, disabledNav: null };

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREVIOUS:
      if (state.sira === 0) {
        return { ...state, disabledNav: "previous" };
      }
      return { ...state, sira: state.sira + 1, disabledNav: null };
    case NEXT:
      if (state.sira === state.movies.length - 1) {
        return { ...state, disabledNav: "next" };
      }
      return { ...state, sira: state.sira - 1, disabledNav: null };
    case RECYCLE_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
