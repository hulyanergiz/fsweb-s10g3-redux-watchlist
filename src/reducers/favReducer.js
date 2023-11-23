import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions/favActions";

const initialState = { favMovies: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return { ...state, favMovies: [...state.favMovies, action.payload] };
    case REMOVE_FROM_FAV:
      const notRemovedFavs = state.favMovies.filter(
        (rmv) => rmv.id !== action.payload
      );
      return { ...state, favMovies: notRemovedFavs };
    default:
      return state;
  }
};
export default reducer;
