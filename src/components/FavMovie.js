import { useDispatch } from "react-redux";
import { REMOVE_FROM_FAV } from "../actions/favActions";
import { RECALL_MOVIE } from "../actions/movieActions";

export default function FavMovie(movie) {
  const dispatch = useDispatch();
  function favCikar() {
    dispatch({ type: REMOVE_FROM_FAV, payload: movie.id });
    dispatch({ type: RECALL_MOVIE, payload: movie });
  }
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{movie.title}</div>
      <button
        onClick={favCikar}
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}
