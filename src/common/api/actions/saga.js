import { call, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import movieApi from "../movieApi";
import { addMovies, deleteMovie } from "./movieSlice";
import { toggeleLoader } from "./loaderSlice";

export function* fetchAllMovies() {
  try {
    // let response = yield call(() => movieApi.get(`/movie?api_key=${APIKEY}`));
    // yield put(addMovies(response.data.results));
    let response = yield call(() => movieApi.get(`/Issues`));
    yield put(addMovies(response.data));
    yield put(toggeleLoader(false));
  } catch (e) {
    yield put(toggeleLoader(false));
  }
}
export function* deleteMovieSaga(action) {
  try {
    let id = action.payload;
    yield call(() => movieApi.delete(`/Issues/${id}`));
    yield put(deleteMovie(id));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_ALL_MOVIES, fetchAllMovies);
  yield takeEvery(sagaActions.DELETE_MOVIE, deleteMovieSaga);
}
