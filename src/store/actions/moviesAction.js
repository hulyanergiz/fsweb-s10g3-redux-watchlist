export const NEXT = "next movie";
export const PREVIOUS = "previous movie";
export const RECYCLE_MOVIE = "recycle movie from favorite movie list";
export const REMOVE_MOVIE = "remove movie when added to favorite movie list";

export function nextMovie() {
  return { type: NEXT };
}

export function prevMovie() {
  return { type: PREVIOUS };
}

export function removeMovie(movie) {
  return { type: REMOVE_MOVIE, payload: movie };
}

export function recycleMovie(movie) {
  return { type: RECYCLE_MOVIE, payload: movie };
}
