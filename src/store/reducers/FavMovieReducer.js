import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/FavMovieActions";

const initialState = { favMovies: [] };
export const favMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const doesExist = state.favMovies.find(
        (movie) => movie.id === action.payload.id
      );
      if (doesExist) {
        return state;
      } else {
        return { ...state, favMovies: [...state.favMovies, action.payload] };
      }
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favMovies: state.favMovies.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
