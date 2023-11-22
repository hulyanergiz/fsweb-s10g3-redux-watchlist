import { NEXT } from "../actions/movieActions";
import { movies } from "../movies";

const initialState = { movies: movies, sira: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT:
      if (state.sira < state.movies.length - 1) {
        return { ...state, sira: state.sira + 1 };
      } else return state;
    default:
      return state;
      break;
  }
};
export default reducer;
