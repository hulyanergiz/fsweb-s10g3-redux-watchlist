import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_FAV } from "./actions/favActions";
import { NEXT, PREVIOUS } from "./actions/movieActions";
import { REMOVE_MOVIE } from "./actions/movieActions";
import { useHistory } from "react-router-dom";
function App() {
  const { sira, movies } = useSelector((store) => store.movieReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const favMovies = useSelector((store) => store.favReducer.favMovies);

  function oncekiFilm() {
    dispatch({ type: PREVIOUS });
  }
  function sonrakiFilm() {
    dispatch({ type: NEXT });
  }
  function favorilereEkle() {
    if (movies.length > 1) {
      dispatch({ type: ADD_TO_FAV, payload: movies[sira] });
      dispatch({ type: REMOVE_MOVIE, payload: movies[sira] });
    } else if (movies.length === 1) {
      dispatch({ type: ADD_TO_FAV, payload: movies[sira] });
      dispatch({ type: REMOVE_MOVIE, payload: movies[sira] });
      history.push("/listem");
    }
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={oncekiFilm}
              disabled={sira === 0}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:opacity-25"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              disabled={sira === movies.length - 1}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:opacity-25"
            >
              Sıradaki
            </button>

            <button
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
              onClick={favorilereEkle}
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
