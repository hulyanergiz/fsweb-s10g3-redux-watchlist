import { movies } from "../movies";

const initialState = { movies: movies, sira: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
      break;
  }
};
export default reducer;
