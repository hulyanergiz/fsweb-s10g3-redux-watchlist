import { ADD_TO_FAV } from "../actions/favActions";

const initialState = { favMovies: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return { ...state, favMovies: [...state.favMovies, action.payload] };

    default:
      return state;
  }
};
export default reducer;
