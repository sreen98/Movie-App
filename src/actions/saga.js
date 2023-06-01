import { call, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import movieApi from "./movieApi";
import { getAllMovies, deleteMovie, addMovie, editMovie } from "./movieSlice";

export function* fetchAllMovies() {
  try {
    let response = yield call(() => movieApi.get(`/Issues`));
    yield put(getAllMovies(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* addMovieSaga(action) {
  try {
    let data = action.payload;
    let response = yield call(() => movieApi.post(`/Issues`, data));
    yield put(addMovie(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* editMovieSaga(action) {
  try {
    let data = action.payload;
    let response = yield call(() => movieApi.put(`/Issues/${data.id}`, data));
    yield put(editMovie(response.data));
  } catch (e) {
    console.log(e);
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
  yield takeEvery(sagaActions.ADD_MOVIE, addMovieSaga);
  yield takeEvery(sagaActions.EDIT_MOVIE, editMovieSaga);
}
