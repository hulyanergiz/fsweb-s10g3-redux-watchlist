import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import { movieReducer } from "./reducers/movieReducer";
import { favMovieReducer } from "./reducers/FavMovieReducer";

const rootReducer = combineReducers({ movieReducer, favMovieReducer });
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
