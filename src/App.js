//import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector, useDispatch } from "react-redux";
import {
  NEXT,
  PREVIOUS,
  prevMovie,
  removeMovie,
} from "./store/actions/moviesAction";
import { addToFavorites } from "./store/actions/FavMovieActions";
function App() {
  //const [sira setSira] = useState(0);
  const { sira, disabledNav, movies } = useSelector(
    (state) => state.movieReducer
  );
  const favMovies = useSelector((state) => state.favMovieReducer.favMovies);

  const dispatch = useDispatch();
  function sonrakiFilm() {
    //setSira(sira + 1);
    dispatch({ type: NEXT });
  }
  function oncekiFilm() {
    dispatch({ type: PREVIOUS });
  }
  function favorilereEkle(item) {
    dispatch(prevMovie());
    dispatch(addToFavorites(item));
    dispatch(removeMovie(item));
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
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={oncekiFilm}
              disabled={disabledNav === "previous"}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              disabled={disabledNav === "next"}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={() => favorilereEkle(movies[sira])}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
